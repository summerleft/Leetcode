/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const profit = new Array(prices.length - 1);
    let res = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        profit[i] = prices[i + 1] - prices[i];
        res += profit[i] > 0 ? profit[i] : 0;
    }
    return res;
};