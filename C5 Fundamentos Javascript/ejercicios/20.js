function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let vowels  = ['a','e','i','o','u'];
  let lowerWord = letra.toLowerCase();
  console.log("The value is",lowerWord);
  if (lowerWord.length>1) {
    //console.log("El valor debe ser de un digito entre A-Z");
    return "Dato incorrecto";
  } else if(vowels.includes(lowerWord)) {
    //console.log("La letra ingresada en una vocal");
    return "Es vocal";
  }else{
    //console.log("Parece que el valor ingresado no es una vocal");
    return "Dato incorrecto";
  }
}

esVocal("A");

module.exports = esVocal;
