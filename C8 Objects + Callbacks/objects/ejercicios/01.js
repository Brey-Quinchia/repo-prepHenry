const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];
   console.log(a);
   return a;
};
obtenerValorPropiedad({nombre: 'Brey', edad:'30'},'nombre');
module.exports = obtenerValorPropiedad;
