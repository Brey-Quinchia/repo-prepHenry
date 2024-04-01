function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  toReturn = objetoMisterioso.numeroMisterioso * 5; 
  console.log(toReturn);
  return toReturn; 
}
multiplicarNumeroDesconocidoPorCinco({numeroMisterioso:40,ssd:'no'})
module.exports = multiplicarNumeroDesconocidoPorCinco;
