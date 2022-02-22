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

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash[key];
    if (!node) return -1;
    this.moveToHead(node);
    return node.val;
};

LRUCache.prototype.moveToHead = function(node) {
    this.removeFromList(node);
    this.addToHead(node);
}

LRUCache.prototype.removeFromList = function(node) {
    let temp1 = node.prev;
    let temp2 = node.next;
    temp1.next = temp2;
    temp2.prev = temp1;
}

LRUCache.prototype.addToHead = function(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
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
        let newNode = new ListNode(key, value);
        this.hash[key] = newNode;
        this.addToHead(newNode);
        this.count++;
        if (this.count > this.capacity) {
            this.deleteTail();
        }
    }
};

LRUCache.prototype.deleteTail = function() {
    let temp = this.dummyTail.prev;
    delete this.hash[temp.key];
    this.dummyTail.prev = temp.prev;
    temp.prev.next = this.dummyTail;
    this.count--;
};

function ListNode(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */