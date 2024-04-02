function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) {
    console.log(`El objeto contiene la propiedad ->${propiedad}`);
    return true; 
  }else{
    console.log(`El objeto no tiene la propiedad ${propiedad}`);
    return false;
  }

}
tienePropiedad({name: "Brey"},'name')
module.exports = tienePropiedad;
