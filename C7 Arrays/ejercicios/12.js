function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  upperArray = [];
  for (const iterator of array) {
    upperIterator = iterator.toUpperCase(); // convertimos a mayuscula el elemento
    upperArray.push(upperIterator); // Lo añadimos al final del array
    
  }
  console.log(upperArray);
  return upperArray;
}
convertirStringAMayusculas(["hello"]); 
module.exports = convertirStringAMayusculas;
