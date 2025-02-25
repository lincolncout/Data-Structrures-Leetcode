let nums = [0,1,0,3,12]

let quantidadeZeros = 0;

for(let i = nums.length - 1 ; i >= 0 ; i--){
  if(nums[i] === 0){
      nums.splice(i,1)
      nums.push(0)
  }
}
nums.splice(0,quantidadeZeros)


console.log(nums)