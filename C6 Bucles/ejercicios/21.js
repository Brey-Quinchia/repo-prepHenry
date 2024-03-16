function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  pow = 1
  cont = 1
  
  switch (numero) {
    case 1:
      console.log("is pow 1 of 2");
      return true;
    case null: 
      return false;
    case undefined: 
      return false;
  }

  while (cont<=100){
    pow*=2; 
    console.log(pow);
    if(pow === numero){
      console.log("Is pow of 2");
      return true;
    }else if(pow>numero){
      console.log("Is not");
      return false;
    }
    cont++
  }
}
esPotenciaDeDos(1);
module.exports = esPotenciaDeDos;
