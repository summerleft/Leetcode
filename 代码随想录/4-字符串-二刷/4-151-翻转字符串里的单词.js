/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const strArr = Array.from(s);
  removeExtraSpaces(strArr);
  reverse(strArr, 0, strArr.length - 1);
  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }
  return strArr.join('')
};

let removeExtraSpaces = function(arr) {
  let slow = 0, fast = 0;
  while (fast < arr.length) {
    if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
      fast++
    } else {
      arr[slow++] = arr[fast++];
    }
  }
  arr.length = arr[arr.length - 1] === ' ' ? slow - 1 : slow;
}

let reverse = function(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}