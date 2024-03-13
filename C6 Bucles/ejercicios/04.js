function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  if (edad>=18) {
    console.log("Allowed")// Let's have fun
    return "Allowed"
  } else {
    console.log("Not allowed")// You are not allowed
    return "Not allowed";
  }
}
mayoriaDeEdad(19);
module.exports = mayoriaDeEdad;
