function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   largeStr = ""; 
   for (const string of [str1,str2,str3]) {
      if (string.length > largeStr.length) {
         largeStr = string; 
      }
   }
   buildStr = "";
   for (let counter = 0; counter < largeStr.length; counter++) {
      charStr1 = Boolean(str1[counter]) ? str1[counter] : ""; 
      charStr2 = Boolean(str2[counter]) ? str2[counter] : ""; 
      charStr3 = Boolean(str3[counter]) ? str3[counter] : ""; 
      //? el metodo boolena retorna false si el string esta vacio 
      //? O si el string no tiene mas caracteres
      buildStr += charStr1+charStr2+charStr3; 
      console.log(buildStr); 
   }
   console.log(`The largest str is ${largeStr}`);
   console.log(`Build str is ${buildStr}`);
   return buildStr;
}
combine("abc","12345","67");
module.exports = combine;
