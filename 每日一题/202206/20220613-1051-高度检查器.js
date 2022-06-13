/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const expected = heights.slice();
    expected.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            res++;
        }
    }
    return res;
};