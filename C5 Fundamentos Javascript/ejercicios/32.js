function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  valUsd = 1.20 // para tasas variables
  eurToUsd = euro*valUsd;//conversion
  console.log(euro, "euros equivalen a $"+eurToUsd,"dolares");//muestreo
  return eurToUsd; 
}
deEuroAdolar(1);
module.exports = deEuroAdolar;
