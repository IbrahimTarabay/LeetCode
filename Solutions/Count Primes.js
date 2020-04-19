/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const noPrimes=new Array(n);
    for(var i=2;i*i<n;++i){
        if(!noPrimes[i]){
            for(j=2;j*i<n;++j){
                noPrimes[j*i]=true;
            }
        }
    }
    
    let numsOfPrimes=0;
    
    for(var i=2;i<n;++i){
        if(!noPrimes[i]){
            numsOfPrimes++;
        }
    }
    
    return numsOfPrimes;
};