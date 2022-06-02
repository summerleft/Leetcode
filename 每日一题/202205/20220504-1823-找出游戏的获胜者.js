/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findTheWinner = function(n, k) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    let curIndex = 0;
    while (arr.length > 1) {
        curIndex += (k - 1);
        while (curIndex >= arr.length) {
            curIndex -= arr.length;
        }
        arr.splice(curIndex, 1);
    }
    return arr[0];
};