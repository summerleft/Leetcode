/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 填坑法
var sortArray = function(nums) {
    let partition = function(nums, start, end) {
        let pivot = nums[start];
        let left = start;
        let right = end;
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

    let qsort = function(nums, start, end) {
        if (start >= end) return;
        let pivot = partition(nums, start, end);
        qsort(nums, 0, pivot - 1);
        qsort(nums, pivot + 1, end);
    }
    qsort(nums, 0, nums.length - 1);
    return nums;
};

// 顺序遍历法
