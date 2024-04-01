const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  let toReturn = Object.keys(objeto); 
  console.log(toReturn);
  return toReturn;
};
listarPropiedades({edad:'18',nombre:'Brey'})
module.exports = listarPropiedades;
