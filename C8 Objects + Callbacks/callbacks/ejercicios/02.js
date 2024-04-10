function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   if (callback) {
      return callback(string)
   }else{
      return string;
   }
}
cambiarCadena('Brey', function (str){
   str = str.toUpperCase();
   return str; 
})
module.exports = cambiarCadena;
