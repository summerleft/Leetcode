/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const strArr = Array.from(s);
    removeExtraSpace(strArr);
    reverse(strArr, 0, strArr.length - 1);
    let start = 0;
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }
    return strArr.join('');
};

let reverse = function(strArr, start, end) {
    while (start < end) {
        [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
        start++;
        end--;
    }
    return strArr.join('');
}

let removeExtraSpace = function(strArr) {
    let slow = 0, fast = 0;
    while (fast < strArr.length) {
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
            fast++;
        } else {
            strArr[slow++] = strArr[fast++];
        }
    }
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow;
}