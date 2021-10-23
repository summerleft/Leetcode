/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  let res = Array.from({ length: n }).map(() => new Array(n))
  let l = 0, t = 0, r = n - 1, b = n - 1;
  let num = 1, target = n * n;
  while (num <= target) {
    for (let i = l; i <= r; i++) {
      res[t][i] = num++;
      console.log(res);
    }
    t++;
    for (let i = t; i <= b; i++) {
      res[i][r] = num++;
      console.log(res);
    }
    r--;
    for (let i = r; i >= l; i--) {
      res[b][i] = num++;
      console.log(res);
    }
    b--;
    for (let i = b; i >= t; i--) {
      res[i][l] = num++;
      console.log(res);
    }
    l++;
  }
  return res;
};