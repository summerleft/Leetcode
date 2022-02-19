var MyQueue = function() {
    this.stackA = [];
    this.stackB = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackA.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const len = this.stackB.length;
    if (len) return this.stackB.pop();
    while (this.stackA.length) {
        this.stackB.push(this.stackA.pop());
    }
    return this.stackB.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const x = this.pop();
    this.stackB.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackA.length && !this.stackB.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */