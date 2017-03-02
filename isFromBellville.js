var isFromBellville = function(regNo){
  var isFB = regNo.startsWith('CY');
  var notFB = !regNo.startsWith('CY');
  
  return isFB;
}

console.log(isFromBellville("CA 123"));
