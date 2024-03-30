function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arrayOk = [];
  for (const element of array) {
    if (element ==="Enero" || element ==="Marzo" || element ==="Noviembre") {
      arrayOk.push(element); 
    }
  }
  if (arrayOk.length <3) {
    console.log("No se encontraron los meses pedidos");
    return "No se encontraron los meses pedidos"
  }
  console.log(`Array now is ${arrayOk}`);
  return arrayOk; 
}
mesesDelAño(["Diciembre", "Marzo", "Abril","Mayo", "Noviembre"])
module.exports = mesesDelAño;
