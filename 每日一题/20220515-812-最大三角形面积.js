/**
 * @param {number[][]} points
 * @return {number}
 */
 var largestTriangleArea = function(points) {
    const n = points.length;
    let max = 0;
    for (let i = 0; i < n - 2; i++ ) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let [x1, y1] = points[i];
                let [x2, y2] = points[j];
                let [x3, y3] = points[k];
                max = Math.max(max, 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
            }
        }
    }
    return max;
};