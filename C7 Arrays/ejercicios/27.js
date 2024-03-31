function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let sentence = palabras.join(" "); 
  console.log(sentence);
  return sentence; 
}
dePalabrasAFrase(["Hello"]);
module.exports = dePalabrasAFrase;
