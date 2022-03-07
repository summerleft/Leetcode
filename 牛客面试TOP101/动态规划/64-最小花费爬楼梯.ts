/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param cost int整型一维数组 
 * @return int整型
 */
export function minCostClimbingStairs(cost: number[]): number {
    // write code here
    let res: number = 0;
    const len: number = cost.length;
    if (len === 1 || len === 2) return 0;
    const dp: number[] = new Array(len + 1);
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i -2], dp[i - 1] + cost[i - 1]);
    }
    return dp[len];
}