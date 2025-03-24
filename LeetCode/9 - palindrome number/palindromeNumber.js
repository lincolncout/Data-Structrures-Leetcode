
console.log(isPalindrome(123421))

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const stringX = x.toString();
  const metade = stringX.length % 2 === 0 ? stringX.length / 2 : (stringX.length + 1) / 2;

  for(i = 0 ; i < metade ; i++ ){
    if(stringX[i] !== stringX[stringX.length - 1 - i]){
      return false;
    }
  }

  return true;
};