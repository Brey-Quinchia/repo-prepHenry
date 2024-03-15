function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch (idioma) {
    case "aleman":
      console.log("Guten Tag!"); 
      return "Guten Tag!"; 
    case "mandarin":
      console.log("Ni Hao!"); 
      return "Ni Hao!"; 
    case "ingles":
    console.log("Hello!"); 
    return "Hello!"; 
    default:
      console.log("Hola!"); 
      return "Hola!"; 
  }

}
saludo("aleman");

module.exports = saludo;
