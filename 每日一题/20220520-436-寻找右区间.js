/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
 var findRightInterval = function(intervals) {
    const n = intervals.length;
    const startIntervals = new Array(n).fill(0).map(() => new Array(2));
    for (i = 0; i < n; i++) {
        startIntervals[i][0] = intervals[i][0];
        startIntervals[i][1] = i;
    }
    const res = new Array(n);
    startIntervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;
        let target = -1;
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (intervals[i][1] <= startIntervals[mid][0]) {
                target = startIntervals[mid][1];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        res[i] = target;
    }
    return res;
};