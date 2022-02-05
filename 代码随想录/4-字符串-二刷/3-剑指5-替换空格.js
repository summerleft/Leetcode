/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  const strArr = Array.from(s);
  let count = 0;
  for (const s of strArr) {
    if (s === ' ') {
      count++;
    }
  }
  let left = strArr.length - 1;
  let right = strArr.length + 2 * count - 1;
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--]
    }
  }
  return strArr.join('')
};