function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento); // add the element to the end
  console.log(`Array with ${elemento} is now -->`);
  console.log(array);
  return array; 
  
}
agregarItemAlFinalDelArray([],true); 
module.exports = agregarItemAlFinalDelArray;
