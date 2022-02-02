/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
  if (len < 4) return [];
  const res = [];
  nums.sort((a, b) => a - b);
  for (let a = 0; a < len - 3; a++) {
    // if (nums[a] > target) break;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < len - 2; b++) {
      // if (nums[a] + nums[b] > target) break;
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1, d = len - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d]
        if (sum > target) {
          d--;
          continue;
        }
        if (sum < target) {
          c++;
          continue;
        }
        res.push([nums[a], nums[b], nums[c], nums[d]]);
        while (c < d && nums[c] === nums[++c]);
        while (c < d && nums[d] === nums[--d]);
      }
    }
  }
  return res;
};

console.log(fourSum([1,-2,-5,-4,-3,3,3,5],-11))