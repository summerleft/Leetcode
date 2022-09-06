/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  const n = nums.length;
  const dp = [];
  for (let i = 0; i < n; i++) {
      if (i === 0) {
          dp[i] = 1;
      } else {
          let temp = 1;
          for (let j = 0; j < i; j++) {
              if (nums[i] > nums[j]) {
                  temp = Math.max(temp, dp[j] + 1);
              }
          }
          dp[i] = temp;
      }
  }
  console.log(dp);
  return Math.max(...dp);
};

lengthOfLIS([10,9,2,5,3,7,101,18])

