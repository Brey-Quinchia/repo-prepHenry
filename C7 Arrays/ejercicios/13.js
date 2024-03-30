function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  getEven = [];
  for (const iterator of array) {
    if (iterator%2===0) {
      getEven.push(iterator);
    }
  }
  console.log(`The even number in ${array} are: ${getEven}`);
  return getEven; 
}
filtrarNumerosPares([1,2,3,4,5,6])
module.exports = filtrarNumerosPares;
