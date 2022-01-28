function removeElement(nums: number[], val: number): number {
    let slow: number = 0, fast: number = 0;
    const len: number = nums.length;
    let result: number = len;
    while (fast < len) {
      while (nums[fast] === val) {
        fast++;
        result--;
      }
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
    return result;
  };