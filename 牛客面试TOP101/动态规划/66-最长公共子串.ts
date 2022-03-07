/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
export function LCS(str1: string, str2: string): string {
    // write code here
    const len1: number = str1.length;
    const len2: number = str2.length;
    let maxLength: number = 0;
    let maxLastIndex: number = 0;
    const dp: number[][] = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1));
    for (let i = 0; i < len1 + 1; i++) {
        for (let j = 0; j < len2 + 1; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (maxLength < dp[i][j]) {
                    maxLength = dp[i][j];
                    maxLastIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return str1.substring(maxLastIndex - maxLength + 1, maxLastIndex + 1);
}