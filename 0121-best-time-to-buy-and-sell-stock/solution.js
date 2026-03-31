/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let maxprofit = 0
    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        } else {
            if (maxprofit < prices[i] - min) {
                maxprofit = prices[i] - min
            }
            
        }

    }
    return maxprofit
};
