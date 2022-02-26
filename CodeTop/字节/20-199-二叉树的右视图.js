/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len) {
            const cur = queue.shift();
            if (len === 1) res.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
    }
    return res;
};