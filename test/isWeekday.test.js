describe('isWeekday function', function(){

    it('check if its a weekday', function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });
});
