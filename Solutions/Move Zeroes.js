/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
   const len = nums.length;
   let j = 0;

   for(let i=0;i<len;i++){
     if(nums[i] == 0){
       nums.splice(i, 1);
          j++;
     }
   }

  for(let k=0;k<len-j;k++){
     if(nums[k] == 0){
       nums.splice(k, 1);
     j++;
     } 
   } 
 
 for(let s=0;s<j;s++){
  nums.push(0);
 }
  return nums;
};