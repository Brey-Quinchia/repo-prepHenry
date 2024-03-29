function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  for (let x = 0; x < array.length; x++) {
    const element = array[x];
    if (element.length >=5) {
      console.log(`The element ${element} has more than 5 characters`);
      return element; 
    }
  }
  console.log(undefined);
  return undefined;
}
obtenerPrimerStringLargo(["he","wrld",2,"ANTY",3,4,"HOL"])
module.exports = obtenerPrimerStringLargo;
