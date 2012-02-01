TestCase('Function constructor', {
   setUp: function() {
       
   },
   
   tearDown: function() {
       
   },
   
   'test there is a global Function function': function() {

       assert(typeof Function === 'function');

   },
   
   'test the global Function function has a prototype function': function() {
       
       assert(typeof Function.prototype === 'function');
       
   },
   
   'test Function.prototype defines a call function': function() {
       
       assert(typeof Function.prototype.call === 'function');
       
   },
   
   'test Function.prototype defines an apply function': function() {
       
       assert(typeof Function.prototype.apply === 'function');
       
   },
   
   'test we can define new functions via Function(arg1, arg2... argn, body), without the new operator': function() {
       
       var example = Function('value', 'return value');
       
       var ex = example('ex');
       
       assert(ex === 'ex');
       assert(typeof example === 'function');
       
   },
   
   'test we can define new functions via new Function(arg1, arg2... argn, body), with the new operator': function() {
       
       var example = new Function('value', 'return value');
       
       var ex = example('ex');
       
       assert(ex === 'ex');
       assert(typeof example === 'function');
       
   }
});