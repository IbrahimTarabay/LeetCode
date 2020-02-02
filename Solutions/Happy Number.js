const isHappy = function(n) {  
    while(true){
      if(checkHappiness(n) === true){
         return true;
      }else if(checkHappiness(n) === false){
        return false
      }else{
        n = splitSquareSum(n);
    }
  }
};

function checkHappiness(n){
  let unhappy = {"0":0,"2":2,"3":3,"4":4,"5":5,"6":6,"8":8,"9":9,
  "11":11,"12":12,"14":14,"15":15,"16":16,"17":17,"18":18,"20":20,"37":37,"42":42,"58":58,"89":89,"145":145};

  let happy = {"1":1,"7":7,"10":10,"13":13,"19":19,"23":23,"28":28,"31":31,"32":32,"44":44,"49":49,"68":68,"70":70,"79":79,"82":82,"86":86,"91":91,"94":94,"97":97,"100":100,"129":129,"192":192,"262":262,"301":301,"319":319,"367":367,"391":391};

  if((n+"") in happy ){
    return true;
  }
  if((n+"") in unhappy){
    return false;
  }
 return undefined;
}

function splitSquareSum(n){
 let arr = [...n+''].map(Number);
 let sum=0;
  arr.map(x => sum +=Math.pow(x,2));
  return sum
}