function minSubArrayLen(target: number, nums: number[]): number {
  let left: number = 0, right: number = 0;
  let result: number = nums.length + 1;
  let sum: number = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      result = Math.min(result, right - left + 1);
    }
    right++;
  }
  return result === nums.length + 1 ? 0 : result;
};