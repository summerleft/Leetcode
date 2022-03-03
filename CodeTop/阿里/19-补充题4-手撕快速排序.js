/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function(nums) {
//     let partition = function(nums, start, end) {
//         let pivot = nums[start];
//         while (start < end) {
//             while (start < end && pivot <= nums[end]) {
//                 end--;
//             }
//             nums[start] = nums[end];
//             while (start < end && nums[start] <= pivot) {
//                 start++;
//             }
//             nums[end] = nums[start];
//             nums[start] = pivot;  
//         }
//         return start;
//     }

//     let qsort = function(nums, start, end) {
//         if (start >= end) return;
//         let pivot = partition(nums, start, end);
//         qsort(nums, start, pivot - 1);
//         qsort(nums, pivot + 1, end);
//     }

//     qsort(nums, 0, nums.length - 1);
//     return nums;
// };

var sortArray = function(nums) {
    const stack = [];
    stack.push(nums.length - 1);
    stack.push(0);
    while (stack.length) {
        let left = stack.pop();
        let right = stack.pop();
        if (left < right) {
            let pivotIndex = partition(nums, left, right);
            stack.push(pivotIndex - 1);
            stack.push(left);
            stack.push(right);
            stack.push(pivotIndex + 1);
        }
    }
    return nums;
};

let partition = function(nums, left, right) {
    let pivot = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= pivot) right--;
        nums[left] = nums[right];
        while (left < right && nums[left] <= pivot) left++;
        nums[right] = nums[left];
    }
    nums[left] = pivot;
    return left
}