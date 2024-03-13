function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  let allName = nombre +" "+apellido;
  console.log(allName);
  return allName;
}
combinarNombres("Brehiner","Quinchia");
module.exports = combinarNombres;
