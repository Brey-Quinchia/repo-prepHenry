function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  hibridArray = []; 
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    hibridArray.push(element*index);
  }
  console.log(hibridArray);
  return hibridArray; 
}
multiplicarElementosPorIndice([1,2,3])
module.exports = multiplicarElementosPorIndice;
