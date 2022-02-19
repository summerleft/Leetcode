var MyStack = function() {
    this.queueA = [];
    this.queueB = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if (this.queueB.length) {
        this.queueB.push(x);
    } else {
        this.queueA.push(x);
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.queueA.length) {
        while (this.queueA.length > 0) {
            if (this.queueA.length === 1) {
                return this.queueA.shift();
            }
            this.queueB.push(this.queueA.shift());
        }
    } else {
        while (this.queueB.length > 0) {
            if (this.queueB.length === 1) {
                return this.queueB.shift();
            }
            this.queueA.push(this.queueB.shift());
        }
    } 
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const temp = this.pop();
    if (this.queueB.length) {
        this.queueB.push(temp);
    } else {
        this.queueA.push(temp);
    }
    return temp;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return (!this.queueA.length && !this.queueB.length)
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */