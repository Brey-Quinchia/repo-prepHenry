function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a<=0 && b<=0 && a===b) {
    //console.log("Meet the conditions"); 
    return true;
  } else {
    //console.log("Doesn meet the conditions");
    return false;
  }
}
esIgualYNegativo(1,-1);
module.exports = esIgualYNegativo;
