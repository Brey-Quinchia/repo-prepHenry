function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let isNegative;
  if(n<0){
    // Validamos si n es negativo
    n *=-1;
    isNegative = true;
  }
  console.log(n);
  sum = 0 ; 
  for (let i = 1; i<=n; i++) {
    sum +=i;
    console.log(sum);
  }
  if(isNegative){
    // Al ser negativo, al sumar 1 lo restariamos
    sum-=1;
    sum*=-1;
  }
  console.log(`The values is ${sum}`);
  return sum;
}
sumarHastaN(5);
module.exports = sumarHastaN;
