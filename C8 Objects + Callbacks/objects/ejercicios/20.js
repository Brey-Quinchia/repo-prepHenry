function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  likeCounter = 0; 
  for (const userPost of objetoUsuario.posts) {
    pstName = userPost.pstName; 
    likes = userPost.likes;
    likeCounter+=likes;
    console.log(`In ${pstName} user has ${likes}, total->${likeCounter}`);
  }
  return likeCounter; // retornamos el total de likes
}
sumarLikesDeUsuario({
  posts:[
    {pstName:'A',likes:1},
    {pstName:'B',likes:2},
    {pstName:'C',likes:4},
    {pstName:'D',likes:2},
    {pstName:'E',likes:0},
  ]
})
module.exports = sumarLikesDeUsuario;
