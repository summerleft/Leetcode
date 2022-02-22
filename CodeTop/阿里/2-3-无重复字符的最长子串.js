/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let strArr = [...s];
    let set = new Set();
    let res = 0;
    let right = 0;
    for (let left = 0; left < strArr.length; left++) {
        if (left !== 0) {
            set.delete(strArr[left - 1]);
        }
        while (right < strArr.length && !set.has(strArr[right])) {
            set.add(strArr[right]);
            right++;
        }
        res = Math.max(res, right - left);
    }
    return res;
};