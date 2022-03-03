var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (!this.minStack.length) {
        this.minStack.push(val);
    } else {
        const curMin = this.minStack.pop();
        this.minStack.push(curMin);
        this.minStack.push(val < curMin ? val : curMin);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const res = this.stack.pop();
    this.stack.push(res);
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const res = this.minStack.pop();
    this.minStack.push(res);
    return res;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */