function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a>=0 && a<=10) {
      console.log("Number is positive and less than or equal 10"); 
      return true;
   } else {
      console.log("Ohhh, the number is negative or greater than 10 "); 
      return false;
   }
}
esPositivoOInferiorA10(10);
module.exports = esPositivoOInferiorA10;
