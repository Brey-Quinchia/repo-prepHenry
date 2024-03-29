function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  dupArray = []; 
  for (const iterator of array) {
    dupArray.push(iterator*2); 
    
  }
  console.log(`Array doblado es ->${dupArray}`);
  return dupArray;
}
duplicarElementos([1,2,3,4,5])
module.exports = duplicarElementos;
