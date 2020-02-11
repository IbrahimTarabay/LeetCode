/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let cache = {};
  let len = nums.length;
  cache[nums[0]]=0;
  for(let i=1;i<len;i++){
    if((target-nums[i]) in cache){
       return [cache[target-nums[i]],i];
    }
    cache[nums[i]] = i;
  }  
};