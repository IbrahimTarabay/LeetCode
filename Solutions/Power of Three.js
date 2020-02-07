/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
 if(n==1){
   return true;
 }
  while(true){
    n = n/3
    if(n == 1){
     return true
    }
    if(n < 1){
      return false
    }
  }
};