/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let targetIndex = nums.length - k;
    let pivot = qsort(nums, 0, nums.length - 1, targetIndex);
    return pivot;
};

let qsort = function(nums, start, end, targetIndex) {
    if (start > end) return;
    let pivot = partition(nums, start, end);
    if (pivot === targetIndex)  {
        return nums[pivot];
    }
    if (pivot < targetIndex) {
        return qsort(nums, pivot + 1, end, targetIndex);
    } else {
        return qsort(nums, start, pivot - 1, targetIndex);
    }
}

let partition = function(nums, start, end) {
    let pivot = nums[start];
    let left = pivot;
    let right = end;
    while (start < end) {
        while (start < end && nums[end] >= pivot) end--;
        nums[start] = nums[end];
        while (start < end && nums[start] <= pivot) start++;
        nums[end] = nums[start];
    }
    nums[start] = pivot;
    return start;
}

