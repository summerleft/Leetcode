/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (this.map.get(nums[i])) {
            const temp = this.map.get(nums[i]);
            temp.push(i);
            this.map.set(nums[i], temp);
        } else {
            this.map.set(nums[i], [i]);
        }
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const targetArr = this.map.get(target);
    const randIndex = Math.floor(Math.random() * targetArr.length);
    return targetArr[randIndex];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */