/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let p1 = 0, p2 = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let result = 0;
    while (p1 < g.length && p2 < s.length) {
        if (s[p2] >= g[p1]) {
            result++;
            p1++;
            p2++;
        } else {
            p2++;
        }
    }
    return result;
};