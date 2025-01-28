// Reverse a string without using the built-in reverse() method

let stringToReverse = "roma";

if(typeof(stringToReverse) !== "string"){
  console.log("O tipo selecionado não é uma string");
  return;
}

if(stringToReverse.length === 0){
  console.log("A string não possui tamanho");
  return;
}
let newString = ""

for(let i = 0; i < stringToReverse.length; i++){
  newString += stringToReverse[stringToReverse.length -( i + 1)]
}

console.log(newString)