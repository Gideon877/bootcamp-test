var fromWhere = function(carRegNo){
  switch (carRegNo){
      case "CY":
        return 'Bellville';
      case "CJ":
        return 'Paarl';
      case "CA":
        return 'Cape Town';

      default:
        return 'Some other place!';
    }
}

//assert.equal(fromWhere("CY"), "Bellville");
