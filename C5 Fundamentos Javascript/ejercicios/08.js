function esNumeroEntero(numero) {
  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }
}

esNumeroEntero(9)// true
esNumeroEntero(10.5)//false

module.exports = esNumeroEntero;