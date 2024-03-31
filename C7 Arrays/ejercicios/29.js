function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length===0) {
    return null; 
  }
  startOn = numeros[0]
  contNum = numeros[0]
  for (let index = 0; index < numeros.length; index++) {
    nowNum = numeros[index];
    if (nowNum!=contNum) {
      console.log(`Should be ${contNum}`);
       // Para continuar la verificacion
      return contNum;
    }
    contNum++; 
  }
  console.log(null);
  return null;
}
encontrarNumeroFaltante([1,2,3,4,6,7,8,9])
module.exports = encontrarNumeroFaltante;