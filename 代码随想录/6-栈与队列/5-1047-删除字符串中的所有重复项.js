/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const strArr = s.split('');
    const res = [];
    for (const str of strArr) {
        if (res[res.length - 1] !== str) {
            res.push(str);
        } else {
            res.pop();
        }
    }
    return res.join('');
};