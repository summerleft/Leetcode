/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  let count = 0;
  let curMax = 0, nextMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
      nextMax = Math.max(nums[i] + i, nextMax);
      if (i === curMax) {
          curMax = nextMax;
          count++;
      }
  }
  return count;
};