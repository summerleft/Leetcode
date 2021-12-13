/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    const strArr = Array.from(s);
    let count = 0;
    for (const i of s) {
        if (i === ' ') {
            count++;
        }
    }
    let left = s.length - 1, right = s.length + 2 * count - 1;
    while (left >= 0) {
        if (strArr[left] === ' ') {
            strArr[right] = '0';
            strArr[right - 1] = '2';
            strArr[right - 2] = '%';
            right -= 3;
        } else {
            strArr[right] = strArr[left];
            right--;
        }
        left--;
    }
    return strArr.join('');
};