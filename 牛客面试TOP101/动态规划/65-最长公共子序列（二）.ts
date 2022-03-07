/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * longest common subsequence
 * @param s1 string字符串 the string
 * @param s2 string字符串 the string
 * @return string字符串
 */
export function LCS(s1: string, s2: string): string {
    // write code here
    const len1: number = s1.length;
    const len2: number = s2.length;
    if (len1 === 0 || len2 === 0) return '-1';
    const dp: number[][] = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1));
    for (let i = 0; i < len1 + 1; i++) {
        for (let j = 0; j < len2 + 1; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    let res = '';
    let s1L = len1, s2L = len2;
    while (s1L !== 0 && s2L !== 0) {
        if (s1.charAt(s1L - 1) === s2.charAt(s2L - 1)) {
            res += s1.charAt(s1L - 1);
            s1L--;
            s2L--;
        } else {
            if (dp[s1L][s2L - 1] > dp[s1L - 1][s2L]) {
                s2L--;
            } else {
                s1L--;
            }
        }
    }
    if (res.length === 0) return '-1';
    return res.split('').reverse().join('');
}