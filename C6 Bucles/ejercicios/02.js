function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 && booleano2) {
    console.log("Both are true");
    return true; // true
  } else{
    if (booleano1 === false && booleano2 === false) {
      console.log("Both are false");
      return false; // false
    } else {
      console.log("At least one is false");
      return false; // false
    }
  }
  //? Short form ---> 
  //return booleano1 && booleano2;
}
esVerdaderoYFalso(false,false);

module.exports = esVerdaderoYFalso;