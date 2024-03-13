function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let birthdate = new Date(fechaNacimiento); 
  let yearOfBirth = birthdate.getFullYear(); 
  let nowDate = new Date();
  //console.log("The year of birth is: ",yearOfBirth, " and Today is:",nowDate);
  if ((nowDate.getFullYear()-yearOfBirth)>=18) {
    //console.log("Your age is over 18, come on")
    return true; 
  } else {
    //console.log("Youe age is under 18");
    return false;
  }

}

esMayorDeEdad('2007-12-01');
module.exports = esMayorDeEdad;