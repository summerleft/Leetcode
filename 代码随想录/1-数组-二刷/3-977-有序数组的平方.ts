function sortedSquares(nums: number[]): number[] {
  let n: number = nums.length;
  const result: number[] = new Array(n);
  let left:number = 0, right: number = nums.length - 1;
  while (left <= right) {
    if (nums[left] ** 2 <= nums[right] ** 2) {
      result[n - 1] = nums[right] ** 2;
      right--;
    } else {
      result[n - 1] = nums[left] ** 2;
      left++;
    }
    n--
  }
  return result;
};