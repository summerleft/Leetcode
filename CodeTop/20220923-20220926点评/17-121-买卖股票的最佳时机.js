/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max = Number.MIN_SAFE_INTEGER;
    const dp = []; // 记录当前天加上以前的最低价格
    for (let i = 0; i < prices.length; i++) {
        if (i === 0) {
            dp[i] = prices[i];
        } else {
            dp[i] = Math.min(dp[i - 1], prices[i]);
        }
        max = Math.max(max, prices[i] - dp[i]);
    }
    return max;
};