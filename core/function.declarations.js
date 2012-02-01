TestCase('function declarations', {
   setUp: function() {
       
   },
   
   tearDown: function() {
       
   },
   
   'test we can define functions via function definitions': function() {
       
       function example(value) {
           
           return value;
       }

       var ex = example('ex');
              
       assert(typeof assert === 'function');
       assert(ex === 'ex');
   },
   
   'test we can define functions via function expressions': function() {
       
       var example = function(value) {
           
           return value;
       };
       
       var ex = example('ex');
       
       assert(typeof example === 'function');
       assert(ex === 'ex');
   },
   
   'test we can combine function delcarations and named function expressions': function() {
       
       var example = function example(value) {
           
           return value;
       };
       
       var ex = example('ex');
       
       assert(typeof example === 'function');
       assert(ex === 'ex');
   },
   
   'test a function can reference itself through the variable arguments.callee': function() {
       
       function example() {
           
           return arguments.callee;
           
       }
       
       assert(example === example());
   }
});