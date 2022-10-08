/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var advantageCount = function(nums1, nums2) {
    const n = nums1.length;
    const index1 = new Array(n).fill(0),
          index2 = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        index1[i] = i;
        index2[i] = i;
    }
    index1.sort((a, b) => nums1[a] - nums1[b]);
    index2.sort((a, b) => nums2[a] - nums2[b]);
    const res = new Array(n).fill(0);
    let left = 0,
        right = n - 1;
    for (let i = 0; i < n; i++) {
        if (nums1[index1[i]] > nums2[index2[left]]) {
            res[index2[left]] = nums1[index1[i]];
            left++;
        } else {
            res[index2[right]] = nums1[index1[i]];
            right--;
        }
    }
    return res;
};