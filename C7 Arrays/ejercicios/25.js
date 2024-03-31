function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  evenArray = []; 
  let evenCount = 0; 
  for (const element of numeros) {
    if (element %2 !=0) {
      continue; // continuamos al siguiente elemento
    }
    //... de lo contrario
    evenArray.push(element);// Si llegamos a este punto, agregamos el numero par al array
    evenCount++ // contamos el numero par
  }
  console.log(`There are ${evenCount} in the array, and they are: ${evenArray}`);// show
  return evenCount;
}
contarParesConContinue([1,2,3,4,5,6,7]);
module.exports = contarParesConContinue;
