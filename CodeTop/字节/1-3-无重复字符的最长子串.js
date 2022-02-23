/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let strArr = [...s];
    let res = 0;
    let right = 0;
    let set = new Set();
    for (let left = 0; left < s.length; left++) {
        if (left !== 0) {
            set.delete(strArr[left - 1]);
        }
        while (right < s.length && !set.has(strArr[right])) {
            set.add(strArr[right]);
            right++;
            res = Math.max(res, set.size);
        }
    }
    return res;
};