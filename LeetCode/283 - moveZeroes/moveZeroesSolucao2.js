let nums = [0,1,0,3,12]

let index = 0;

for(let i = 0; i< nums.length; i++){
  const num = nums[i];

  if(num != 0){
    nums[index] = num;
    index++;
  }
}

for(let i = index; i < nums.length; i++ ){
  nums[i] = 0
}

console.log(nums)