

const s = "PAYPALISHIRING";
const numRows = 4;

convert(s,numRows)

/*
P  I     N
A L S   I G
YA   H R
P     I
*/

/**s
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert (s, numRows) {
  
  const array = [[]]
  console.log(array)
  let indiceLetraAtual = 0;
  let j = 0;
  let i = 0;

  while(indiceLetraAtual < s.length){
    console.log(indiceLetraAtual)
    if(indiceLetraAtual !== 0 && indiceLetraAtual % numRows === 0){
      do{
        console.log(s[indiceLetraAtual])
        array[i][j] = s[indiceLetraAtual];
        i--;
        j--;
      }while(indiceLetraAtual % numRows !== 0)
      return;
    }
    do{
      console.log(array)
      array[i][j] = s[indiceLetraAtual];
      j++;
      indiceLetraAtual++;
    }while(indiceLetraAtual % numRows !== 0)
      i++;
      j--;
  }

  console.log(array)
};