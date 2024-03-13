function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num>=100 && num<=999){
    console.log("The number have three digits");
    return true;
  }else{
    console.log("The number has not three digits")
    return false;
  }
}
tieneTresDigitos(500);
module.exports = tieneTresDigitos;
