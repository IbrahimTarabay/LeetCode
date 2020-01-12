/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let cache = {};
  let len = nums.length;
  for(let i=0;i<len;i++){
   if(nums[i] in cache){ 
      cache[nums[i]] +=1;
   }else{      
       cache[nums[i]] =1;
   }
  }
  return getKeyByValue(cache,1);
};
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }