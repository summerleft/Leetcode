/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if (nums === []) return [];
    let slow = 0, fast = 0, count = 0;
    const len = nums.length;
    while (fast < len) {
        if (nums[fast] === val) {
            fast++;
            count++;
        } else {
            nums[slow++] = nums[fast++];
        }
    }
    return len - count;
  };