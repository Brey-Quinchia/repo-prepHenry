function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumValues=0; 
  for (const iterator of arrayOfNums) {
    sumValues = sumValues+iterator; 
  }
  console.log(`the sum of the values is ${sumValues}`);
  return sumValues;
}
agregarNumeros([1,2,3])
module.exports = agregarNumeros;
