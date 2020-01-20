/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let cache1 = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
  let cache2 = {"IV":4,"IX":9,"XL":40,"XC":90,"CD":400,"CM":900};

  let arr = s.split("");
  let len = arr.length;
  let sum=0;
  
  for(let i = 0; i<len; i++){
    if((arr[i].concat(arr[i+1])) in cache2){
     sum +=cache2[arr[i].concat(arr[i+1])]; 
     i +=1;
    }else{
      sum += cache1[arr[i]]; 
    }
  }
 return sum;
};