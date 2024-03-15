function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  // Si a es mayor que b, intercambiamos los valores
  if (a > b) {
    [a, b] = [b, a];
  }

  // Recorremos los números desde a hasta b (inclusive)
  for (let i = a; i <= b; i++) {
    // Multiplicamos el producto actual por el número actual
    producto *= i;
    if(producto === -0){
      producto = 0;
    }
  }

  // Devolvemos el producto final
  console.log(producto);
  return producto;
}
productoEntreNúmeros(-5,0);
module.exports = productoEntreNúmeros;