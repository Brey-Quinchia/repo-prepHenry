function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Tu código:
  let area = alto*ancho;
  console.log("El area del rectangulo",alto,"*",ancho,"es: ",area);
  return area; 
}
obtenerAreaRectangulo(5,7);
module.exports = obtenerAreaRectangulo;
