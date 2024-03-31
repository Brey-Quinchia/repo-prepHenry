function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  sum = 1 ; 
  for (const num of numeros) {
    // Si es la primer vuelta, no debera verificarse con si mismo, ni cuando pasa por si mismo
      for (let counter = sum; counter < numeros.length; counter++) {
        if (num===numeros[counter]) {
          console.log(`Number ${num} is same to ${numeros[counter]}`);
          return num; 
        }
      }
      sum++

  }
  return undefined;
  
}
encontrarElementoRepetido([1,2,3,3,4,5])
module.exports = encontrarElementoRepetido;