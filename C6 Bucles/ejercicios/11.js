function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  //? large --> 
  if (num >20 && num<50) {
    console.log(" The number is on range"); 
    return true;
  } else {
    console.log("The number isn't on range"); 
    return false;
  }

  //short -->
  //return num>20 && num<50; 
}
estaEnRango(70);
module.exports = estaEnRango;
