console.log(
  topKFrequent(
    [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3],
    3
  )
);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const arrayFinal = [];
  const mapElements = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!mapElements.has(nums[i])) {
      mapElements.set(nums[i], 1);
    } else {
      mapElements.set(nums[i], mapElements.get(nums[i]) + 1);
    }
  }

  let maiorValor = 0;
  let keyIteracao = "";

  for (let i = 0; i < k; i++) {
    mapElements.forEach((value, key) => {
      if (value > maiorValor) {
        maiorValor = value;
        keyIteracao = key;
      }
    });
    arrayFinal.push(keyIteracao);
    mapElements.delete(keyIteracao);
    maiorValor = 0;
  }

  return arrayFinal;
}
