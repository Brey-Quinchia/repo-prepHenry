// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   let rounded = Math.round(num);
   console.log(`The ${num} rounde is ${rounded}`);
   return rounded;
}
redondearNumero(6.9);
module.exports = redondearNumero;
