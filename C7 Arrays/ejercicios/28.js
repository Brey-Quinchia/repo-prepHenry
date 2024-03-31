function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (Array.isArray(arr) && arr.length>=1) {
    // En caso de que sea array & tenga al menos 1 elemento
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false
  }
}
esArrayNoVacio([1])
module.exports = esArrayNoVacio;