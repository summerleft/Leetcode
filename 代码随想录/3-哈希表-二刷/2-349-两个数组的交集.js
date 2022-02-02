/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set();
  const res = new Set();
  for (const i of nums1) {
    set.add(i);
  }
  for (const i of nums2) {
    if (set.has(i)) {
      res.add(i);
    }
  }
  return Array.from(res);
};