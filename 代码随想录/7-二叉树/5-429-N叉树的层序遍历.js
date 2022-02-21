/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    const res = [];
    while (queue.length) {
        res.push(queue.map((root) => root.val));
        let len = queue.length;
        while (len) {
            const cur = queue.shift();
            queue.push(...cur.children);
            len--;
        }
    }
    return res;
};