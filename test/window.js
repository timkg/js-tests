TestCase('window', {
    setUp: function() {
        
    },
    
    tearDown: function() {
        
    },
    
    'test there is a global window object': function() {
        assert( typeof window !== 'undefined' );
        assert( typeof window === 'object' );
    }
});