function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch (numero) {
    case 1:
      console.log("The day is monday");
      return "Lunes";
    case 2: 
      console.log("The day is Tuesday");
      return "Martes";
    case 3:
      console.log("The day is Wednesday");
      return "Miercoles";
    case 4:
      console.log("The day is Thursday");
      return "Jueves"; 
    case 5: 
      console.log("The day is Friday");
      return "Viernes"; 
    case 6:
      console.log("The day is Saturday");
      return "Sabado";
    case 7:
      console.log("The day is Sunday");
      return "Domingo";
    default:
      console.log("No es un dia de la semana");
      return "No es un dia de la semana";
  }
}
obtenerDiaSemana(2); 
module.exports = obtenerDiaSemana;