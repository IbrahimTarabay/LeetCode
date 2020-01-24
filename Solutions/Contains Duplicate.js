/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  let len = nums.length;
  let cache = {};
    
  for(let i=0;i<len;i++){
    if(nums[i] in cache){
       return true;
    }
    cache[nums[i]] = 1;
  }
  return false;
};