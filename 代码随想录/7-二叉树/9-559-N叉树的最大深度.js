/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
// 递归
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    for (let node of root.children) {
        depth = Math.max(depth, maxDepth(node));
    }
    return depth + 1
};

// 迭代
var maxDepth = function(root) {
    if (!root) return 0;
    let queue = [];
    let count = 0;
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        count++;
        while (len) {
            let cur = queue.shift();
            cur && (queue = [...queue, ...cur.children]);
            len--;
        }
    }
    return count;
};