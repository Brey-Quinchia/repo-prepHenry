function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.password === password) {
    console.log(`The password ${password} is correct`);
    return true; 
  } else {
    console.log(`The password ${password} is invalid`);
    return false;
  }
}
verificarPassword({name: 'Brey',password:'mikeisCat'},'mikeiscat'); 
module.exports = verificarPassword;
