/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return;
    const queue = [root];
    while (queue.length) {
        for (let i = 0; i < queue.length - 1; i++) {
            queue[i].next = queue[i + 1];
        }
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            queue.push(cur.left);
            queue.push(cur.right);
            len--;
        }
    }
};