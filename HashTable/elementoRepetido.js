const array = [];

const map = {};

for(let i = 0; i < array.length; i++){
  const elementoAtual = array[i]
  if(!map[elementoAtual]){
    map[elementoAtual] = true;
  }
  else{
    console.log(array[i]);
    return;
  }
} // O(n) -> performance
// O(n) -> memória

console.log(undefined)
