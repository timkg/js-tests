TestCase('document', {
    setUp: function() {
        
    },
    
    tearDown: function() {
        
    },
    
    'test there is a document object': function() {
        assert( typeof document !== 'undefined' );
        assert( typeof document === 'object' );
    },
    
    'test the window object contains the document object': function() {
        assert( window.document !== 'undefined' );
        assert( window.document === document );
    }
});