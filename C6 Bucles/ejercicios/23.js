function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  cont = 0 
  do {
    num+=5;
    console.log(`The num increment 5 ->${num}`);
    cont++;
  } while (cont<8);
  return num; 
}
doWhile(5);
module.exports = doWhile;