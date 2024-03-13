function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if (x==y) {
    //console.log(x,"=",y);
    return true;
  } else {
    //console.log(x,"!=",y);
    return false; 
  }
}
sonIguales("AA","AA");
module.exports = sonIguales;