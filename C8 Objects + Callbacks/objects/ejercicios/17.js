function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  console.log("Old Object is",JSON.stringify(objetoUsuario,null,2));
  objetoUsuario.password = nuevaPassword; // reemplazamos la contraseña
  console.log("New object is",JSON.stringify(objetoUsuario,null,2));
  return objetoUsuario;
}
actualizarPassword({password:'mikeIscat'},'mikeisnotcat')
module.exports = actualizarPassword;
