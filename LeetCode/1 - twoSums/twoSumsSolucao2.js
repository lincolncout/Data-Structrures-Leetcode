
console.log(teste([2,7,12,20,89,45,17], 19))

function teste(nums, target) {
  let hashMap = {};

  for (let i =0; i< nums.length; i++){
      hashMap[nums[i]] = i; 
  }

  for(let i = 0; i< nums.length; i++){
    const valorBuscado = target - nums[i]
    if(hashMap[valorBuscado]){
      return [i, hashMap[valorBuscado]]
    }
  }

  return []
};