/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
};