function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor===true){
    console.log("Soy verdadero");
    return "Soy verdadero";
  }else{
    console.log("Soy falso"); 
    return "Soy falso";
  }
}
esVerdadero(true);
module.exports = esVerdadero;
