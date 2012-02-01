TestCase('Apply', {

   'test apply allows us to change execution context of function invocations': function() {
       
       var obj = {
           name: 'obj',
           sayName: function() {
               return this.name;
           }
       }
       
       // just to make sure it works
       assert(obj.sayName() === 'obj');
       
       var otherObj = {
           name: 'otherObj'
       }
       
       assert( obj.sayName.apply(otherObj) === 'otherObj' );
       
   },
   
   'test apply expects an array of arguments': function() {
       
       var obj = {
          name: 'obj',
          sayHi: function(msg) {
              return msg
          }
          
      }

      assert(obj.sayHi('hi') === 'hi');

      var otherObj = {
          name: 'otherObj'
      }

      assert( obj.sayHi.apply(otherObj, ['hi']) === 'hi' );
       
   }
});