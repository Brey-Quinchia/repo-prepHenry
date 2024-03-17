function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   pureString = string.toLowerCase(); 
   console.log(pureString);
   toReverse = Array.from(pureString); 
   console.log(toReverse);
   reverStr = toReverse.reverse().join("");//Invertimos el array y luego lo unimos con join
   console.log(reverStr);
   if(string === reverStr){
      console.log(`Word ${string} is same to ${reverStr}`);
      return true; 
   }else{
      console.log(`Word -${pureString}- is not same to -${reverStr}-`);
      return false; 
   }
   
}
esPalindromo("Pato"); 
module.exports = esPalindromo;
