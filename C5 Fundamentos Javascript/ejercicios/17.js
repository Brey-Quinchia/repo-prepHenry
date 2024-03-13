function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  //large form
  if (num%2===0) {
    console.log("number",num,"is par")
    return true;
  } else {
    console.log("number",num,"is impar")
    return false;
  }
  //short form
  //return num %2 ===0;
}
esPar(9);
module.exports = esPar;
