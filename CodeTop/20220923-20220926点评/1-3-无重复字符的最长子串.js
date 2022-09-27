/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const strArr = [...s];
    const map = new Map();
    const len = strArr.length;
    let maxLen = 0;
    let left = 0, right = 0;
    for(; right < len; right++) {
        const cur = strArr[right];
        if (map.has(cur)) {
            left = Math.max(map.get(cur) + 1, left);
        }
        maxLen = Math.max(right - left + 1, maxLen);
        map.set(cur, right);
    }
    return maxLen;
};