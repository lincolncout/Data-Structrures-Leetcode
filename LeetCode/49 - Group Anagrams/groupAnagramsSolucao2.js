console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// depois tentar solução sem fazer sort (usando asc ii)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const hash = {};
  let hashKey = "";

  for (let i = 0; i < strs.length; i++) {
    const quantidadeLetras = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      const posicaoLetra = strs[i].charCodeAt(j) - 97;
      quantidadeLetras[posicaoLetra] += 1;
    }
    for (let i = 0; i < quantidadeLetras.length; i++) {
      if (quantidadeLetras[i]) {
        hashKey += String.fromCharCode(97 + i) + quantidadeLetras[i];
      }
    }
    if (!hash[hashKey]) {
      hash[hashKey] = [strs[i]];
    } else {
      hash[hashKey].push(strs[i]);
    }
    hashKey = "";
  }

  return Object.values(hash);
}
