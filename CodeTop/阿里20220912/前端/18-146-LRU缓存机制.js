function ListNode(key, val, prev, next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyNail = new ListNode();
    this.dummyHead.next = this.dummyNail;
    this.dummyNail.prev = this.dummyHead;
    this.hash = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const cur = this.hash[key];
    if (!cur) {
        return -1
    } else {
        this.moveToHead(cur);
        return cur.val
    }
};

LRUCache.prototype.moveToHead = function(node) {
    this.deleteFromList(node);
    this.addToHead(node);
}

LRUCache.prototype.addToHead = function(node) {
    const head = this.dummyHead.next;
    this.dummyHead.next = node;
    node.next = head;
    head.prev = node;
    node.prev = this.dummyHead;
    this.hash[node.key] = node;
}

LRUCache.prototype.deleteFromList = function(node) {
    const left = node.prev;
    const right = node.next;
    left.next = right;
    right.prev = left;
    delete this.hash[node.key]
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const cur = this.hash[key];
    if (cur) {
        cur.val = value;
        this.moveToHead(cur);
    } else {
        const node = new ListNode(key, value);
        if (this.count === this.capacity) {
            this.deleteFromList(this.dummyNail.prev);
        } else {
            this.count++;
        }
        this.addToHead(node);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */