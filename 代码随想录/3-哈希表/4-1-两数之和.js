/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let map = {};
  for (let i in nums) {
    if(map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
  }
  return [];
};