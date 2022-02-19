/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const priorityQueue = new PriorityQueue((a, b) => a[1] - b[1]);

    for (const entry of map.entries()) {
        priorityQueue.push(entry);
        if (priorityQueue.size() > k) {
            priorityQueue.pop();
        }
    }

    const ret = [];
    for (let i = priorityQueue.size() - 1; i >= 0; i--) {
        ret[i] = priorityQueue.pop()[0];
    }

    return ret;
};

function PriorityQueue(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
}

PriorityQueue.prototype.push = function(item) {
    this.queue.push(item);
    let index = this.queue.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (parent >= 0 && this.compare(parent, index) > 0) {
        [this.queue[parent], this.queue[index]] = [this.queue[index], this.queue[parent]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
    }
}

PriorityQueue.prototype.pop = function() {
    const ret = this.queue[0];
    this.queue[0] = this.queue.pop();
    let index = 0;
    let left = index + 1;
    let selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    while (selectedChild !== undefined && this.compare(index, selectedChild) > 0) {
        [this.queue[index], this.queue[selectedChild]] = [this.queue[selectedChild], this.queue[index]];
        index = selectedChild;
        left = index * 2 + 1;
        selectedChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }
    return ret;
}

PriorityQueue.prototype.size = function() {
    return this.queue.length;
}

PriorityQueue.prototype.compare = function(index1, index2) {
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;
    return this.compareFn(this.queue[index1], this.queue[index2]);
}