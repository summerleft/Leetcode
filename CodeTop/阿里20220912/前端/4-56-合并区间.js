/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    return intervals.reduce((pre, cur) => {
        const lastInterval = pre[pre.length - 1];
        const left1 = lastInterval[0],
              right1 = lastInterval[1],
              left2 = cur[0],
              right2 = cur[1];
        if (left2 <= right1) {
            if (right2 <= right1) {
                return pre;
            } else {
                pre.pop();
                pre.push([left1, right2]);
                return pre;
            }
        } else {
            pre.push(cur);
            return pre;
        }
    }, [intervals[0]]);
};