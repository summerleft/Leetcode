/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 堆排序
// var findKthLargest = function(nums, k) {
//     let heapSize = nums.length;
//     buildMaxHead(nums, heapSize);
//     for (let i = nums.length - 1; i > nums.length - k; i--) {
//         [nums[0], nums[i]] = [nums[i], nums[0]];
//         heapSize--;
//         maxHeapify(nums, 0, heapSize);
//     }
//     return nums[0];
// };

// let buildMaxHead = function(nums, heapSize) {
//     for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
//         maxHeapify(nums, i, heapSize);
//     }
// }

// let maxHeapify = function(nums, i, heapSize) {
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;
//     let largest = i;
//     if (left < heapSize && nums[left] > nums[largest]) {
//         largest = left;
//     }
//     if (right < heapSize && nums[right] > nums[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         [nums[i], nums[largest]] = [nums[largest], nums[i]];
//         maxHeapify(nums, largest, heapSize);
//     }
// }

// 快速排序
var findKthLargest = function(nums, k) {
    return qsort(nums, 0, nums.length - 1, k);

};

let qsort = function(nums, left, right, k) {
    if (left > right) return;
    let pivot = partition(nums, left, right);
    if (pivot === nums.length - k) {
        console.log('return');
        console.log(nums[pivot])
        return nums[pivot];
    }
    
    if (pivot < nums.length - k) {
        return qsort(nums, pivot + 1, right, k);
    } else {
        return qsort(nums, left, pivot - 1, k);
    }
 
}

let partition = function(nums, left, right) {
    let pivot = nums[left];
    while (left < right && nums[right] >= pivot) {
        right--;
    }
    nums[left] = nums[right];
    while (left < right && nums[left] <= pivot) {
        left++;
    }
    nums[right] = nums[left];
    nums[left] = pivot;
    return left;
}

console.log(findKthLargest([3,2,1,5,6,4], 2));