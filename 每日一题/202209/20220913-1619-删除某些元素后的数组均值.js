/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const deleteNum = n * 0.05;
  const resArr = arr.slice(deleteNum, n - deleteNum);
  let sum = 0;
  resArr.forEach((item) => {
      sum += item;
  })
  return sum / (n - deleteNum * 2);
};