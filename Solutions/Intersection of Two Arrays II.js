/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2){
  let len1 = nums1.length;
  let len2 = nums2.length;
  let cache = {};
  let arr = [];

 if(len1 >= len2){
   for(let i=0;i<len2;i++){
     if(!(nums2[i] in cache)){
       cache[nums2[i]] = 1;
     }else{
       cache[nums2[i]] += 1;
     } 
   }

   for(let i=0;i<len1;i++){
      if(nums1[i] in cache && cache[nums1[i]] >= 1){     
       arr.push(nums1[i]);
       cache[nums1[i]] -= 1;
      }
      if(cache[nums1[i]] == 0){        
        delete cache[nums1[i]];
      }
   }

 }else{
    for(let i=0;i<len1;i++){
     if(!(nums1[i] in cache)){
       cache[nums1[i]] = 1;
     }else{
       cache[nums1[i]] += 1;
     } 
   }
    for(let i=0;i<len2;i++){
      if(nums2[i] in cache && cache[nums2[i]] >= 1){     
       arr.push(nums2[i]);
       cache[nums2[i]] -= 1;
      }
      if(cache[nums2[i]] == 0){        
        delete cache[nums2[i]];
      }
   }
 }
return arr;
};