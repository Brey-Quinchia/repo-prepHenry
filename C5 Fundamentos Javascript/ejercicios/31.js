function areaDelTriangulo(base, altura) {
  // Calcula el área de un triángulo y retorna el resultado.
  // Tu código:
  let triangleArea = (base*altura)/2;
  console.log("El area del triangulo es:",triangleArea);
  return triangleArea;
}
areaDelTriangulo(5,8);
module.exports = areaDelTriangulo;
