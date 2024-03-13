function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let pmt = lado*4;
   console.log("El perimetro del cuadrado de lado",lado, "es:",pmt);
   return pmt;
}
retornarPerimetro(9);
module.exports = retornarPerimetro;
