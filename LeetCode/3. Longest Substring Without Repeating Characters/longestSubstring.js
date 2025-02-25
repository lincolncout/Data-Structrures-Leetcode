console.log(lengthOfLongestSubstring("tmmzuxt")) 

// pwwkew
// bbbbb
// abcabcbb
// dvdf
// abba
// tmmzuxt

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {

  let maiorQuantidadeCarateres = 0; 
  let quantidadeAtualCaracteres = 0;

  let carateresDiferentes = {};

  for(let i = 0; i < s.length; i++){
    if(!carateresDiferentes[s[i]] && carateresDiferentes[s[i]] !== 0){
      carateresDiferentes[s[i]] = i;
      quantidadeAtualCaracteres ++;
    }
    else{
      if(quantidadeAtualCaracteres > maiorQuantidadeCarateres){
        maiorQuantidadeCarateres = quantidadeAtualCaracteres
      }
      quantidadeAtualCaracteres = i - carateresDiferentes[s[i]] > quantidadeAtualCaracteres ? quantidadeAtualCaracteres + 1 : i - carateresDiferentes[s[i]];
      carateresDiferentes[s[i]] = i;
    }
  }

  if(quantidadeAtualCaracteres > maiorQuantidadeCarateres){
    maiorQuantidadeCarateres = quantidadeAtualCaracteres;
  }

  return maiorQuantidadeCarateres;
};
