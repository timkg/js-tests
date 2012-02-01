TestCase('functions as values', {
   setUp: function() {
       
   },
   
   tearDown: function() {
       
   },
   
   'test we can store functions as values of an array': function() {
       var funcs = [];
       
       // pushing a barebones function literal
       funcs.push(function() {});
       
       function ex() {
           return 'example';
       }
       
       // pushing a named function definition
       funcs.push(ex);
       
       var example = function() {
           return 'example';
       };
       
       // pushing a named function expression
       funcs.push(example)
       
       assert(typeof funcs[0] === 'function');
       assert(typeof funcs[1] === 'function');
       assert(typeof funcs[2] === 'function');
   },
   
   'test we can execute functions stored in an array directly from the array position': function() {
       var funcs = [];
       
       var example = function() {
           return 'example';
       };
       
       funcs.push(example);
       
       assert(funcs[0]() === 'example');
   },
   
   'test functions are equal by reference, not by value': function() {
       var f1 = function() {};
       var f2 = function() {};
       
       assert(f1 !== f2);
       assert(f1 != f2);
       
       assert(function(){} !== function(){});
       assert(function(){} != function(){});
       
       var f3 = f1;
       
       assert(f1 === f3);
       assert(f1 == f3);
   }
});