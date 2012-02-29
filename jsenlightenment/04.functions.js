TestCase('Conceptual overview of using the Function() objects', {

   'test we can use Function() to create new function': function() {
       
		var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
		
		assert( addNumbersA(2, 2) === 4 );
		
		var addNumbersB = function( num1, num2 ) {
			return num1 + num2;
		};
		
		assert( addNumbersB(2, 2) === 4 );
       
   },

	'test we can pass the Function() constructor a single string of comma-separated values for multiple arguments': function() {

		var timesFunction = new Function('num1,num2', 'return num1 + num2');

		assert( timesFunction(2, 2) === 4 );

   }

});

TestCase('Function() properties and methods', {

	'test a Function object instance has the "arguments", "constructor" and "length" properties': function() {
		
		function test() {
			
		}
		
		assert( typeof test.arguments !== 'undefined' );
		assert( typeof test.constructor !== 'undefined' );
		assert( typeof test.length !== 'undefined' );
		
	},
	
	'test a Function object instance has the "apply()", "call()" and "toString" methods': function() {
		
		function test() {
			
		}
		
		assert( typeof test.apply === 'function' );
		assert( typeof test.call === 'function' );
		assert( typeof test.toString === 'function' );
		
	},
	
	'test function return the value "undefined" when no return value is specified': function() {
		
		function test() {
			
		}
		
		assert( typeof test() === 'undefined' );
		
	},
	
	'test functions are first-class citizens - they can be stored in a normal variable': function() {
	
		function test() {
			
		}
		
		var t = test;
		
		assert( t === test );
		
		var b = function() {
			return true;
		};
		
		assert( typeof b === 'function' );
		
	},
	
	'test functions are first-class citizens - they can be stored in an array': function() {
		
		var a = [];
		
		a.push( function test(){ return true; } );
		
		assert( typeof a[0] === 'function' );
		
		assert( a[0]() === true );
		
		function test2() {
			
		}
		
		a.push( test2 );
		
		assert( typeof a[1] === 'function' );
		
	},
	
	'test functions are first-class citizens - they can be stored as a property of an object': function() {
		
		var obj = {};
		
		obj.test = function() {
			return true;
		};
		
		assert( typeof obj.test === 'function' );
		
	},
	
	'test functions are first-class citizens - they can be passed to other functions as arguments': function() {
		
		function test() {
			return 'test';
		}
		
		function returner( val ) {
			return val;
		}
		
		assert( returner(test) === test );
		
		
	},
	
	'test functions are first-class citizens - they can store properties': function() {
		
		function test() {
			return 'test';
		}
		
		test.answerA = 'a';
		
		assert( test.answerA === 'a' );
		
	},
	
	'test functions are first-class citizens - they can be stored in a normal variable': function() {
		
	}
	
});

TestCase('this & arguments values available to all functions', {

	'test a function has access to its arguments via the "arguments" property': function() {
		
		function add() {
			return arguments[0] + arguments[1];
		}
		
		assert( add(1,1) === 2 );
		
	},
	
	'test inside a function, the "this" keyword points to the object containing the function': function() {
		
		window.test = function() {
			return this;
		}
		
		assert( test() === window );
		
		var obj = {
			test: function() {
				return this;
			}
		};
		
		assert( obj.test() === obj );
		
		var obj2 = {};
		
		obj2.test = window.test;
		
		assert( obj2.test() === obj2 );
		
	},
	
	'test the arguments.callee property points to the function itself': function() {
		
		function test() {
			return arguments.callee;
		}
		
		assert( test() === test );
		
	},
	
	'test we can use arguments.callee to call a function recursively': function() {
		
		function fibonacci( n ) {
			if( n === 0 ) {
				return 0;
			} else if( n === 1 ) {
				return 1;
			} else {
				return arguments.callee(n-1) + arguments.callee(n-2);
			}
		}
		
		assert( fibonacci(2) === 1 );
		
	},
	
	'test we can reuse a function\s identifier to call a function recursively': function() {
		
		function fibonacci( n ) {
			if( n === 0 ) {
				return 0;
			} else if( n === 1 ) {
				return 1;
			} else {
				return fibonacci(n-1) + fibonacci(n-2);
			}
		}
		
		assert( fibonacci(6) === 8 );
		
	}
});

TestCase('the function instance length property and arguments.length', {
	
	'test a function\s arguments.length property equals the number of arguments passed to the function during execution': function() {
		
		function test(a, b, c) {
			return arguments.length;
		}
		
		assert( test(1) === 1 );
		
	},
	
	'test a function\s length property equals the number of arguments defined in the function definition': function() {
		
		function test(a, b, c) {
			
		}
		
		assert( test.length === 3 );
		
	},
	
	'test we can redefine a function\s parameters inside the function itself': function() {

		function test( a, b ) {
			arguments[0] = 1;
			b = 1;
			
			return a+b;
		}
		
		assert( test(2,2) === 2 );
				
	},
	
	'test we can define functions via constructor functions, statements, and expressions': function() {
		
		var addConstructor = new Function('a', 'b', 'return a + b');
		
		function addStatement(a, b) {
			return a + b;
		}
		
		var addExpression = function(a, b) {
			return a + b;
		}
		
		assert( addConstructor(1, 1) === 2 );
		
		assert( addStatement(1, 1) === 2 );

		assert( addExpression(1, 1) === 2 );
		
	},
	
	'test we can invoke a function in the context of another object via apply()': function() {
		
		var obj = {
			name: 'obj',
			sayName: function() {
				return this.name;
			}
		};
		
		var dog = {
			name: 'dog'
		};
		
		assert( obj.sayName.apply(dog) === 'dog' );
		
	},
	
	'test apply() expects arguments as an array': function() {
		
		var person = {
			firstName: 'a',
			lastName: 'b',
			sayName: function(before, after) {
				return before + this.firstName + this.lastName + after;
			}
		}
		
		var otherPerson = {
			firstName: 'b',
			lastName: 'c'
		};
		
		assert( person.sayName.apply(otherPerson, ['My name is ', '.']) === 'My name is bc.' );

	},
	
	'test we can invoke a function in the context of another object via call()': function() {
		
		var obj = {
			name: 'obj',
			sayName: function() {
				return this.name;
			}
		};
		
		var dog = {
			name: 'dog'
		};
		
		assert( obj.sayName.call(dog) === 'dog' );
		
	},
	
	'test call() expects arguments as individual arguments': function() {
		
		var person = {
			firstName: 'a',
			lastName: 'b',
			sayName: function(before, after) {
				return before + this.firstName + this.lastName + after;
			}
		}
		
		var otherPerson = {
			firstName: 'b',
			lastName: 'c'
		};
		
		assert( person.sayName.call(otherPerson, 'My name is ', '.') === 'My name is bc.' );

	},
	
	'test we can pass an anonymous function to another function as argument in order to get an identifier for the anonymous function': function() {
		
		var x = false;
		
		function Identify(f) {
			f();
			return true;
		}
		
		Identify( function(){ x = true; } );
		
		assert( x === true );
		
	},
	
	'test we can call a named function expression immediately after it\s definition, without using parentesis': function() {
		
		var x = false;
		
		var sayHello = function () {
			x = true;
		}();
		
		assert( x === true );
		
	},
	
	'test we can call an anonymous function expression immediately after it\s definition, as long as we wrap it in parentesis': function() {
		
		var x = false;
		
		(function () {
			x = true;
		})();
		
		assert( x === true );
		
	},
	
	'test we can call an anonymous function expression immediately after it\s definition, when we prepend the negation operator, !': function() {
		
		var x = false;
		
		!function () {
			x = true;
			return true;
		}();
		
		assert( x === true );
		
	},
	
	'test when self-invoking an anonymous function expression without wrapping parentesis, prepending it with the negation operator, we negate its return value': function() {
		
		var x = true;
		
		x = !function () {
			return true;
		}();
		
		assert( x === false );
		
	},
	
	'test we can call a function statement immediately after it\s definition, as long as we wrap it in parentesis': function() {
		
		var x = false;
		
		(function sayHello () {
			x = true;
		})();
		
		/* throws a syntax error:
		function sayHello () {
			x = true;
		}();
		*/
		assert( x === true );
		
	},
	
	'test we can nest functions inside other functions': function() {
		
		function a() {
			function b() {
				function c() {
					return true;
				}
				
				return c();
			}
			
			return b();
		}
		
		assert( a() === true );
		
	},
	
	'test "this" inside of nested functions points to the global object': function() {
		
		var x = undefined;
		
		function a() {
			function b() {
				x = this;
			}
			b();
		}
		
		a();
		
		assert( x === window );
		
	},
	
	'test we can invoke a function before it is defined, as long as it is a function statement': function() {
		
		var x = false;
		
		assert( typeof setX === 'function'  );
		
		setX();
		
		assert( x === true );
		
		function setX() {
			x = true;
		}
		
	},
	
	'test we can\t invoke a function before it is defined when it is a function expression': function() {
		
		assert( setX === undefined );
		
		var setX = function () {
			x = true;
		}
		
	}
	
	
	
	
	
});