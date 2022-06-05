/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
 var Solution = function(radius, x_center, y_center) {
    this.r = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    const len = Math.sqrt(Math.random() * this.r * this.r);
    const angle = Math.random() * 2 * Math.PI;
    const x = this.x_center + len * Math.cos(angle);
    const y = this.y_center + len * Math.sin(angle);
    return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */