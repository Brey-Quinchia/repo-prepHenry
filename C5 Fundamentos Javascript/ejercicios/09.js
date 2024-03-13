function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (typeof valor =='undefined') {
    return true;
    //console.log("Ummm, the value is undef, for TRUE");
  } else if (valor===null){
    return true;
    //console.log("The value is null, for TRUE");
  } else{
    return false;
    //console.log("Something is here, for FALSE");
  }
}

esNuloOIndefinido(null);

module.exports = esNuloOIndefinido;