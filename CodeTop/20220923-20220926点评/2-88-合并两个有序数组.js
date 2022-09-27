/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let cur = m + n - 1,
        cur1 = m - 1,
        cur2 = n - 1;
    while (cur1 >= 0 && cur2 >= 0) {
        if (nums1[cur1] >= nums2[cur2]) {
            nums1[cur] = nums1[cur1];
            cur1--;
        } else {
            nums1[cur] = nums2[cur2];
            cur2--;
        }
        cur--;
    }
    while (cur1 >= 0) {
        nums1[cur] = nums1[cur1];
        cur--;
        cur1--;
    }
    while (cur2 >= 0) {
        nums1[cur] = nums2[cur2];
        cur--;
        cur2--;
    }
};