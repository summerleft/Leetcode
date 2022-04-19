/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    const sortNums = nums.sort((a, b) => (a - b));
    let tempIndex;
    for (let i = 0; i < k; i++) {
        if (sortNums[i] <= 0) {
            sortNums[i] = -sortNums[i];
        } else {
            if (tempIndex === undefined) {
                if (i > 0) {
                    if (Math.abs(sortNums[i] < sortNums[i - 1])) {
                        tempIndex = i;
                    } else {
                        tempIndex = i - 1;
                    }
                } else {
                    tempIndex = 0;
                }
            }
            sortNums[tempIndex] = -sortNums[tempIndex];
        }
    }
    return sortNums.reduce((pre, cur) => {
        return pre + cur;
    })
};