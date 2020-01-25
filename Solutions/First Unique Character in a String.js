/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  let len = s.length;
  let cache = {};

 for(let i=0;i<len;i++){
  if(s.charAt(i) in cache){
   cache[s.charAt(i)] += 1;
  }else{
    cache[s.charAt(i)] = 1;
  }
 }

 for(const property in cache){  
   if(cache[property]==1){
     return s.indexOf(property);
   }  
 }
 return -1;
};