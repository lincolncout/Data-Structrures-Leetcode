const nums = [1,1,1,3,3,4,3,2,4,2]



let differentElements = {}; // hash para guardar os elementos

for(let i = 0; i < nums.length; i++){
  const currentElement = nums[i];
  if(!differentElements[currentElement]){
    differentElements[currentElement] = true;
  }
  else{
    return true;
  }
}

return false;