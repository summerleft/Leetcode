/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const strArr = Array.from(s);
  for (let i = 0; i < n; i++) {
    strArr.push(strArr.shift());
  }
  return strArr.join("");
};

var reverseLeftWords = function (s, n) {
  const len = s.length;
  let i = 0;
  while (i < len - n) {
    s = s[len - 1] + s;
    i++;
  }
  return s.slice(0, len);
};
