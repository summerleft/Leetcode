/**
 * @param {number[]} height
 * @return {number}
 */
// 按行求，超时
var trap = function(height) {
    let res = 0;
    let maxHeight = Math.max(...height);
    for (let i = 1; i <= maxHeight; i++) {
        let isStart = false;
        let temp = 0;
        for (let h of height) {
            if (h >= i) {
                isStart = true;
                res += temp;
                temp = 0;
            } else {
                isStart && temp++;
            }  
        }
    }
    return res;
};

// 动态规划
var trap = function(height) {
    let res = 0;
    let maxLeft = new Array(height.length);
    let maxRight = new Array(height.length);
    maxLeft[0] = 0, maxRight[height.length - 1] = 0;

    for (let i = 1; i < height.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }

    for (let i = 1; i < height.length - 1; i++) {
        if (Math.min(maxLeft[i], maxRight[i]) > height[i]) {
            res += (Math.min(maxLeft[i], maxRight[i]) - height[i]);
        }
    }

    return res;
};

