/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits){
  let len = digits.length;
    while(true){
      if(len==0){
        digits.unshift(1);
        break;
      }
      if(digits[len-1] != 9){
        digits[len-1] +=1;
        break;
       }else{
        digits[len-1] = 0;
    } 
    len--;     
  }
  return digits;
};