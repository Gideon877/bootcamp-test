var transportFee = function(shiftPrice){
  switch(shiftPrice){
    case 'morning':
      return 'R20';
    case 'afternoon':
      return 'R10';
    default:
      return 'free';
                   }
}

//console.log(transportFee('nightshift'));
