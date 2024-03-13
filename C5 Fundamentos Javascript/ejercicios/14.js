function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  let strLength1 = str1.length; 
  let strLength2 = str2.length; 
  if (strLength1==strLength2) {
    //console.log(str1," mide:",strLength1, " y ",str2,"mide:",strLength2)
    return true;
  } else {
    //console.log("Las cadenas no tienen la misma longitud");
    return false;
  }
}
tienenMismaLongitud("AA","BBB");
module.exports = tienenMismaLongitud;