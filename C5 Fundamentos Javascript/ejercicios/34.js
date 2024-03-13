// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // Retorna el valor de "num" elevado al cuadrado.
  // Tu código:
  let numPow2 = Math.pow(num,2);
  console.log(`The square of ${num} is ${numPow2}`);
  return numPow2;
}
elevarAlCuadrado(9);
module.exports = elevarAlCuadrado;
