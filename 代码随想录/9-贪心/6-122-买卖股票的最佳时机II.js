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

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let res = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let cur = prices[i + 1] - prices[i];
        if (cur > 0) res+= cur;
    }
    return res;
};