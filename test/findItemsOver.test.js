describe ('findItemsOver function', function(){
  it('print all items price over 15', function(){
    assert.deepEqual(findItemsOver20(itemList, 15),[ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ])
  })
})
