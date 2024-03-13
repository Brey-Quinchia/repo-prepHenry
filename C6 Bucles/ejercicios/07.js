function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if (a%2===0 && a%3===0) {
    console.log("The number is divisible by 3 and 2 ");
    return true;
  } else {
    console.log("The number is not divisible by 3 or 2 ");
    return false;
  }
}
esParYDivisiblePorTres(4);
module.exports = esParYDivisiblePorTres;