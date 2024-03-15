function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   sum = 0;
   for (let i = 1; i <=n; i++) {
      sum+=i;
      if(sum>=100){
         break;
   }
   }
   console.log(sum);
   return sum;
}
sumarHastaNConBreak(15);
module.exports = sumarHastaNConBreak;
