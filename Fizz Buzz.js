/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  var arr=[];
  
 for(let i = 0;i<n;i++){
  arr[i] = ""+(i+1);
  if((i+1)%3 == 0){
    arr[i] = "Fizz";
  }
  if((i+1)%5 == 0){
    arr[i] = "Buzz";
  }
  if((i+1)%15 == 0){
    arr[i] = "FizzBuzz";
  }
 }
 return arr;
};