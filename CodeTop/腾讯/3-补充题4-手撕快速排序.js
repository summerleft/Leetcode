/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let partition = function(nums, start, end) {
        let pivot = nums[start];
        while (start < end) {
            while (start < end && pivot <= nums[end]) {
                end--;
            }
            nums[start] = nums[end];
            while (start < end && nums[start] <= pivot) {
                start++;
            }
            nums[end] = nums[start];
            nums[start] = pivot;  
        }
        return start;
    }

    let qsort = function(nums, start, end) {
        if (start >= end) return;
        let pivot = partition(nums, start, end);
        qsort(nums, start, pivot - 1);
        qsort(nums, pivot + 1, end);
    }

    qsort(nums, 0, nums.length - 1);
    return nums;
};