function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let counterN = 0 ; 
  for (const iterator of array) {
    if (iterator>10) {
      counterN++; 
    }
  }
  console.log(`In the array ${array} there are ${counterN} greater than 10`);
  return counterN; 
}
contarElementosMayoresA10([1,2,3,56,12,13]); 
module.exports = contarElementosMayoresA10;
