// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y retórnalo.
  // Tu código:
  let rounded = Math.ceil(num); 
  console.log(`The number ${num} rounded up is ${rounded} `);
  return rounded;
}
redondearHaciaArriba(6.3);
module.exports = redondearHaciaArriba;