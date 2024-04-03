function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function(){
    toReturn = this.precio - (this.precio*this.porcentajeDeDescuento); 
    return toReturn;
  }
  return objetoProducto 
}
var producto = {
  precio:80,
  porcentajeDeDescuento:0.1
}
agregarMetodoCalculoDescuento(producto);
console.log(JSON.stringify(producto,null,2));
module.exports = agregarMetodoCalculoDescuento;
