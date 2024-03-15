function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch (color) {
    case "blue":
      console.log(`This is ${color}`);
      return `This is blue`;
    case "red":
      console.log(`This is ${color}`);
      return `This is red`;
    case "green":
      console.log(`This is ${color}`);
      return `This is green`;
    case "orange":
      console.log(`This is ${color}`);
      return `This is orange`;
    default:
      console.log("Color not found");
      return "Color not found"; 
  }
}
colors("or")
module.exports = colors;
