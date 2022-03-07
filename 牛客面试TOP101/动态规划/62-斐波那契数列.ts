/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param n int整型 
 * @return int整型
 */
export function Fibonacci(n: number): number {
    // write code here
    const dp: number[] = new Array(n);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n - 1];
}