/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = [];
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
};

let ListNode = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

LRUCache.prototype.removeFromList = function(node) {
    let left = node.prev;
    let right = node.next;
    left.next = right;
    right.prev = left;
    delete this.hash[node.key];
    this.count--;
}

LRUCache.prototype.addToHead = function(node) {
    let head = this.dummyHead.next;
    this.dummyHead.next = node;
    node.prev = this.dummyHead;
    node.next = head;
    head.prev = node;
    this.hash[node.key] = node;
    this.count++;
}

LRUCache.prototype.moveToHead = function(node) {
    this.removeFromList(node);
    this.addToHead(node);
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash[key];
    if (node) {
        this.moveToHead(node);
        return node.val;
    } else {
        return -1;
    }
};

LRUCache.prototype.deleteTail = function() {
    let node = this.dummyTail.prev;
    this.removeFromList(node);
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash[key];
    if (node) {
        node.val = value;
        this.moveToHead(node);
    } else {
        if (this.count === this.capacity) {
            this.deleteTail();
        }
        let newNode = new ListNode(key, value);
        this.addToHead(newNode);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */