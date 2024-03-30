function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumValues=0; 
  for (const iterator of resultadosTest) {
    sumValues = sumValues+iterator; 
  }
  prom = sumValues/resultadosTest.length; 
  console.log(`The prom is ${prom}`);
  return prom; 

}
promedioResultadosTest([4,5,6,5])
module.exports = promedioResultadosTest;
