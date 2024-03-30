function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let numArray = []; // define array
  for (let x = 0; x < 10; x++) {
    if (x===5) {
      continue; 
    }else{
      num+=2;
      numArray.push(num);
    }
  }
  console.log(numArray);
  return numArray;
}
continueStatement(50);
module.exports = continueStatement;
