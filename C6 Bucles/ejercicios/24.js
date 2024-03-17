function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let spelled = []; 
   for (const char of texto) {
      //console.log(`Is on ${char}`);
      spelled.push(char);
   }
   console.log(spelled);
   reverseSpelled = spelled.reverse(); // Reverse array with reverse() method, easyyy
   reverseString = reverseSpelled.join("");
   console.log(reverseString);
   return reverseString;
}
// new pro function 
function invertirTextoPro(text){
   let spelled = []; // Para guardar el array deletreado
   let reverseSpelled = [];// Para guardar el array invertido
   let charCounter = 0
   for (const char of text) {
      spelled.push(char);// Para agregar el caracter al final del array
      charCounter++ // Para contar los caracteres
   }
   for (const charR of spelled) {
      reverseSpelled.unshift(charR); // unshift() agrega el nuevo caracter al comienzo del string
   }
   let reverseString = reverseSpelled.join();//Convertimos el array a texto
   console.log(`${text} spelled is ${spelled}, have ${charCounter} chars`);
   console.log(`${text} reverse is ${reverseSpelled}`);
}
invertirTexto("Hola mundo");
//invertirTextoPro("serrany") // use pro function 
module.exports = invertirTexto;
