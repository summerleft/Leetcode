/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let getSquareSum = function(num) {
    let result = [];
    while (num) {
      result.push(num % 10);
      num = Math.floor(num / 10);
    }
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += result[i] * result[i];
    }
    console.log(sum);
    return sum;
  }

  const resultSet = new Set();
  let result = n;
  while (result !== 1) {
    result = getSquareSum(result);
    if (resultSet.has(result) && result !== 1) {
      return false;
    } else {
    resultSet.add(result);
    }
  }
  return true;
};