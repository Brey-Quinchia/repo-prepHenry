function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   console.log(objeto);
   return objeto;
}
actualizarValorPropiedad({nombre:'Brey'},'edad',18)

module.exports = actualizarValorPropiedad;
