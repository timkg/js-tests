TestCase('Function properties', {

   'test a function\s lenth property determines the number of expected arguments': function() {
       
       function example(value) {
           return value;
       }
       
       assert(example.length === 1);
       
   }
});