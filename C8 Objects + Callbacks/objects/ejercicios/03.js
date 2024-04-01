const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor; 
  console.log(objeto);
  return objeto; 
};
agregarNuevaPropiedad({nombre:'Brey'},'edad',18)
module.exports = agregarNuevaPropiedad;
