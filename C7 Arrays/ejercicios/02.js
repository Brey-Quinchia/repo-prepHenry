function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  let lastElement  = array[array.length-1];
  console.log(`The last element is ${lastElement}`);// 6
  return lastElement;
}
devolverUltimoElemento([1,2,3,4,5,6])
module.exports = devolverUltimoElemento;
