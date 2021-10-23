/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let n = nums.length
  let left = 0, right = n - 1;
  let res = new Array(n);
  let cur = n - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[cur] = nums[left] * nums[left];
      left++;
    } else {
      res[cur] = nums[right] * nums[right];
      right--;
    }
    cur--;
  }
  return res;
};