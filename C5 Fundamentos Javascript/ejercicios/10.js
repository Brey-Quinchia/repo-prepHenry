function esFechaValida(fecha) {
  var date = new Date(fecha);
  if (isNaN(date)){
    return false;
  }else{
    return true;
  }
  
}
esFechaValida('2022-01-03');
esFechaValida('ff');
// error in test verification 

module.exports = esFechaValida;