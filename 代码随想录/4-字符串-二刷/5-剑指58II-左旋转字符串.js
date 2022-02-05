/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
  let strArr = s.split('');
  reverse(strArr, 0, s.length - 1);
  reverse(strArr, 0, s.length - n - 1);
  reverse(strArr, s.length - n, s.length - 1);
  return strArr.join('')
};

let reverse = function(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}