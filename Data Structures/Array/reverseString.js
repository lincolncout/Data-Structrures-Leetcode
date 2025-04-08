reverse('Hi My name is Andrei')

function reverse(str){
  let reverseString = ''
  for(let i = 0; i < str.length; i ++){
    reverseString += str[str.length - (i + 1)];
  }
  console.log(reverseString) 
}

function reverse2(str){
  return str.split('').reverse().join('')
}