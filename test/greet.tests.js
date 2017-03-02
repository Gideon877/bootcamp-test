describe('The greet function', function(){

    it('should greet Janine correctly', function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });
    it('should greet Thabang correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Thabang', greet('Thabang'));
    });
  });
