function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   sumNum = 0
   for (const num of arrayOfNumbers) {
      sumNum = num + sumNum;
   }
   cb(sumNum);
}
sumarArray([1,2,3,4,5],function(rst){
   console.log(`result of sum array values is ${rst}`);
   return rst;
})
module.exports = sumarArray;
