var countRegNumber = function(regNumber){
  var regCount = regNumber.split(",");
  console.log(regCount.length);
  return regCount.length;
}

countRegNumber('CA 182736,CY 523519,CJ 812328');
