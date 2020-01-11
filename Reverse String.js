/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
    let temp = 0;
    const len = s.length;
    const halfLen = len/2;
    
    for(let i = 0;i<halfLen; i++){
      temp = s[i];
      s[i] = s[len-(i+1)];
      s[len-(i+1)] = temp;
    }
    return s;
};