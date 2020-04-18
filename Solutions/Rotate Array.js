/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let hold;
    let len = nums.length;
     for(let i=0;i<k;i++){
       hold = nums.splice(len-1);
       nums.unshift(hold[0]);
     }
    return nums;
   };