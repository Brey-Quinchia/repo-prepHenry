function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  sixTable = []; 
  for (let i = 0; i <= 10; i++) {
    sixTable.push(i*6);
  }
  console.log(`The table is ${sixTable}`);
  return sixTable;
}
tablaDelSeis();
module.exports = tablaDelSeis;
