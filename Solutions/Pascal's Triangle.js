/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  let base = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
  
  if(numRows<=5){
  return base.splice(0,numRows);
  }
  else{
  let diff = numRows-5;
  for(let k=0;k<diff;k++){
      base.push([]);
    }

  for(let x=5;x<numRows;x++){
    for(let s=1;s<=x;s++){
      if(base[x].length == 0 || base[x].length == x){
        base[x].push(1)
      }
        base[x].push(base[x-1][s-1]+base[x-1][s])
    }
    base[x].splice(x+1);
    }
    return base;
  }
};