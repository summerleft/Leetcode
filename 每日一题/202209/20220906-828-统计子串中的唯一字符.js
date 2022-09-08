/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!map.has(c)) {
            map.set(c, []);
            map.get(c).push(-1);
        }
        map.get(c).push(i);
    }
    let res = 0;
    for (const [_, arr] of map.entries()) {
        arr.push(s.length);
        for (let i = 1; i < arr.length - 1; i++) {
            res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
        }
    }
    return res;
};