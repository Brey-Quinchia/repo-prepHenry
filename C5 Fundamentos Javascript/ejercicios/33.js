function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  console.log(numero%1);
  let isPrime = true;
  if (numero===1||numero===2) {
    isPrime = true;
  } else if(numero % 2 ==0){
    isPrime = false;
  }else{
    for (let count = 2; count <(numero-1); count++) {//error generado si count ==1, evidentemente
      if(numero % count ==0){
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime == true) {
    console.log(`El numero ${numero} es primo`)
    return true;
  } else {
    console.log(`El  numero ${numero} no es primo`)
    return false;
  }
}
esNumeroPrimo(73);
module.exports = esNumeroPrimo;
