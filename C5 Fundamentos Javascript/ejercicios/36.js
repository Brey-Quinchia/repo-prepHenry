// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  let numPow = Math.pow(num,exponent);
  console.log(`${num} raised to the power of ${exponent} is ${numPow}`);
  return numPow;
}
elevar(3,3);
module.exports = elevar;