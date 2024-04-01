function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let User = {
    nombre: nombre,
    email: email, 
    password: password
  }; 
  console.log(`The user ${User.nombre} has email ${User.email}`);
  return User;
}
nuevoUsuario("Brey","brey404.dev@gmail.com","WdsaZxclPP"); 
module.exports = nuevoUsuario;
