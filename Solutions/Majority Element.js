/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let len = nums.length;
  let halfLen = len/2;
  let cache = {};
  for(let i = 0; i<len;i++){
    if(nums[i] in cache){
        cache[nums[i]] +=1;
      if(cache[nums[i]]>halfLen){
        return nums[i];
      }
    }else{
       cache[nums[i]] = 1;
        if(cache[nums[i]]>halfLen){
        return nums[i];
      }
    }
  }
};