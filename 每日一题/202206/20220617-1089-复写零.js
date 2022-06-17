/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    const n = arr.length;
    let count = 0;
    for (const num of arr) {
        if (num === 0) count++;
    }
    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] === 0) count--;
        if (i + count < n) {
            arr[i + count] = arr[i];
            if (arr[i] === 0 && i + count + 1 < n) {
                arr[i + count + 1] = 0
            }
        }
    }
};