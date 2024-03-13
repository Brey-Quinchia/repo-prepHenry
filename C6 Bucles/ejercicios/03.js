function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x>y) {
    console.log("x is greater", x);
    return x;
  } else if(x===y){
    console.log("Both are equal", x, y);
    return x||y;
  }else {
    console.log("Y is greater", y);
    return y;
  }
}
obtenerMayor(3,3);
module.exports = obtenerMayor;
