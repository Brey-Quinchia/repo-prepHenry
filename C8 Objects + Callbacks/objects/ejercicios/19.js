function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  objetoMuchosUsuarios.forEach(user => {
    user.esPremium = true;
  });
  console.log(`The object is ${JSON.stringify(objetoMuchosUsuarios,null,2)}`);
  return objetoMuchosUsuarios;
}
pasarUsuarioAPremium([
  {name:'pepe',esPremium: false},
  {name:'popo',esPremium: false},
  {name:'pupu',esPremium: false}  
])
module.exports = pasarUsuarioAPremium;
