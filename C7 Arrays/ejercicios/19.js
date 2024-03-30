function multiplicarArgumentos(...arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  product = 1; 
  if (arguments.length ===0) {
    console.log(`Array is empty`);
    return 0; 
  }
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    product = element*product; 
    console.log(`The product is ${product}`);
  }
  return product;
}
multiplicarArgumentos(10,0,10)
module.exports = multiplicarArgumentos;
