// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // Retorna el valor de "num" elevado al cubo.
  // Tu código:
  let numPow3 = Math.pow(num,3);
  console.log(`The number ${num} of cube is ${numPow3}`);
  return numPow3;
}
elevarAlCubo(3);
module.exports = elevarAlCubo;
