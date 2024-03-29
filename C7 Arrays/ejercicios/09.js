function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   index = array.length; 
   rand = Math.floor(index*Math.random()); 
   console.log(`In position ${rand} is -> ${array[rand]}`);
   return array[rand]; 
}
obtenerElementoAleatorio([1,2,3])
module.exports = obtenerElementoAleatorio;
