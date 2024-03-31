function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (const element of secuencia) {
    if (element%n===0) {
      console.log(`first multiple of ${n} found, is ${element}, leaving...`);
      return element;
    } 
  }
  console.log("NO");
  return undefined; 
}
encontrarPrimerMultiploDeN(11,[1, 2, 3, 4, 5, 6, 7, 8, 9])
module.exports = encontrarPrimerMultiploDeN;