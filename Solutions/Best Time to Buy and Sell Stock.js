/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minPrice = 1000000000;
    let maxProfit = 0;
    let len = prices.length;
    for(let i=0;i<len;i++){
      if(prices[i]<minPrice){
         minPrice = prices[i];
       }else if(prices[i] - minPrice > maxProfit)
        maxProfit = prices[i] - minPrice;
    }
    return maxProfit;
};