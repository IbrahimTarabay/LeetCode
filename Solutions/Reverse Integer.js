/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = Math.sign(x)  // returns 1 or  -1
    let reversed = sign * parseInt(x.toString().split('').reverse().join(''))
  
    // check for upper bound (overflow on positive integer range)
    if (reversed > Math.pow(2, 31) - 1) return 0
    
    // check for lower bound (overflow on negative integer range)
    if (reversed < Math.pow(-2, 31)+ 1) return 0
  
    return reversed
  };