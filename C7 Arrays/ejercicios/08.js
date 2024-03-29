function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   index = 0
   equal = false;
   for (const value of array) {
      console.log(`Is on value ${value}`);
      if (value===num) {
         console.log(`${num} is same to ${value}, Position ->${index}`);
         equal = true; 
         return index; 
      }
      index++; 
   }
   if (equal ===false) {
      console.log(`There are not matches`);
      return -1; 
   }

}
encontrarElemento(6,[2,3,4,5]);
module.exports = encontrarElemento;
