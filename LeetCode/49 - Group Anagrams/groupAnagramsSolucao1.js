console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const hash = {};

  for (let i = 0; i < strs.length; i++) {
    const ordenado = strs[i].split("").sort().join("");
    if (!hash[ordenado]) {
      hash[ordenado] = [strs[i]];
    } else {
      hash[ordenado].push(strs[i]);
    }
  }

  return Object.values(hash);
}
