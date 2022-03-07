/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param number int整型 
 * @return int整型
 */
export function jumpFloor(number: number): number {
    // write code here
    const dp: number[] = new Array(number);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < number; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[number - 1];
}