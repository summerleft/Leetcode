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

function removeExtraSpace(strArr) {
    let slowIndex = 0, fastIndex = 0;

    while (fastIndex < strArr.length) {
        if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
            fastIndex++;
        } else {
            strArr[slowIndex++] = strArr[fastIndex++];
        }
    }

    strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex -1 : slowIndex;
}

function reverse(strArr, start, end) {
    let left = start, right = end;
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
}