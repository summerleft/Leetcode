/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    qsort(nums, 0, nums.length - 1);
    return nums;
};

const qsort = (nums, left, right) => {
    if (left >= right) return;
    const pivot = partition(nums, left, right);
    qsort(nums, left, pivot - 1);
    qsort(nums, pivot + 1, right);
}

const partition = (nums, left, right) => {
    const pivot = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= pivot) {
            right--;
        }
        nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) {
            left++;
        }
        nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left;
}