function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   //? Antes de proceder a la verificaicion, convertimos a minusculas 
   str1 = str1.toLowerCase();// to lower
   str2 = str2.toLowerCase();// to lower
   arrStr1 = str1.split("").sort(); // to array and order
   arrStr2 = str2.split("").sort(); // to array and order
   if (arrStr1.length !== arrStr2.length) {
      console.log("Sorry , the arrays are different");
      return false;
   }
   verify = 0; 
   for (let index = 0; index < arrStr1.length; index++) {
      if (arrStr1[index] === arrStr2[index]) {
         verify++; 
      }
   }
   if (verify === arrStr1.length) {
      console.log(`${str1} & ${str2} are anagram`);
      return true; 
   }else{
      console.log(`${str1} & ${str2} are not anagram`);
      return false; 
   }
}
esAnagrama("freso", 'fresa')

module.exports = esAnagrama;
