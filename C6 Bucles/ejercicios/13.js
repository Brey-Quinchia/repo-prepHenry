function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  var md = num%1; 
  if (num %1 ===0) {// The mod of a float number is 
    console.log(`Mod is${md}, the number is integer`);
    return true;
  } else {
    console.log(`Mod is${md}, the number is not integer`);
    return false;
  }

}

esEntero(0.6);
module.exports = esEntero;
