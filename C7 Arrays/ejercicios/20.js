function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length ===0) {
    return true ;// todos los elementos son iguales
  }
  const firstElement = array[0]; 
  for (const element of array) {
    if (element !== firstElement) {
      return false; // Encontramos dos elementos que no son iguales, cortamos
    }
  }
  // si llegamos a este punto es porque todos los elementos son iguales
  return true; 
}
todosIguales([2,1,1,2])
module.exports = todosIguales;
