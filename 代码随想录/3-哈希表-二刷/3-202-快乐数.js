/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const set = new Set();
  while (!set.has(getSquareSum(n))) {
    set.add(getSquareSum(n));
    n = getSquareSum(n);
    if (n === 1) return true;
  }
  return false;
};

let getSquareSum = function(n) {
  let res = 0;
  let strArr = n.toString().split('');
  for (const i in strArr) {
    strArr[i] = Number(strArr[i]);
    res += strArr[i] ** 2;
  }
  return res;
}