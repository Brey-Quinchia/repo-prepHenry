function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.amigos.push(nuevoAmigo);
  console.log(JSON.stringify(objetoUsuario,null,2));
  return objetoUsuario;
}
agregarAmigo({me:'Brey',amigos:['juan','mike','charles']},'harris')
module.exports = agregarAmigo;
