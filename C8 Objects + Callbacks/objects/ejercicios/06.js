const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let counter = 0 ; 
  for (let propiedad in objeto) {
      counter++; 
    }
  console.log(`Has ${counter} propertys`);
  return counter;
};
contarPropiedades({edad:18,nombre:'Brey'});
module.exports = contarPropiedades;
