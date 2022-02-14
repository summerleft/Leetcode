/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    const strArr = Array.from(s);
    const len = strArr.length;
    let count = 0;
    for (const str of strArr) {
        if (str === ' ') {
            count++;
        }
    }
    let left = len - 1, right = len + 2 * count - 1;
    while (left >= 0) {
        if (strArr[left] === ' ') {
            strArr[right--] = '0';
            strArr[right--] = '2';
            strArr[right--] = '%';
            left--;
        } else {
            strArr[right--] = strArr[left--];
        }
    }
    return strArr.join('');
};