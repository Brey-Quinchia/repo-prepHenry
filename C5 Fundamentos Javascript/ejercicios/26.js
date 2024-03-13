function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  word = str+"!";
  console.log(word);
  return word;
}
agregarSimboloExclamacion("Hola mundo");
module.exports = agregarSimboloExclamacion;
