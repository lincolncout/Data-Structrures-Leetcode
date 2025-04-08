// possui elementos iguais nos arrays

const array1 = ['a','b','c','x']
const array2 = ['z','y','x']

const hashFinal = {}

array1.forEach(item =>{
  if(!map[item]){
    hashFinal[item] = true;
  }
})

array2.forEach(item =>{
  if(hashFinal[item]){
    console.log("deu bom")
    console.log(item)
  } 
})
