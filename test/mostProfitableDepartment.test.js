describe ('mostProfitableDepartment function', function(){
  it('print outdoor as the most profitable department', function(){
    assert.deepEqual(mostProfitableDepartment(salesData), 'outdoor')
  })
})
