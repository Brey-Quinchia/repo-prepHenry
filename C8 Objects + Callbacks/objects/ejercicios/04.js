function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   console.log(objeto.hasOwnProperty(propiedad));
   return objeto.hasOwnProperty(propiedad); 
}
verificarPropiedad({nombre:'Brey',edad:18,x:"A"},'edad');
module.exports = verificarPropiedad;
