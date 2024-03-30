function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let biggestIndex = 0; 
  let bigNum = 0;
  for (let i = 0; i < array.length; i++) {
    const elementNow = array[i]; 
    if (i===0) {
      bigNum = elementNow;
    }
    if (elementNow>bigNum) {
      biggestIndex = i; 
      bigNum = elementNow;
    }
  }
  console.log(`Biggest bumber is ${bigNum} is on ${biggestIndex}`);
  return biggestIndex; 
}
encontrarIndiceMayor([-6,-2,-3,-5,-1,-2])
module.exports = encontrarIndiceMayor;
