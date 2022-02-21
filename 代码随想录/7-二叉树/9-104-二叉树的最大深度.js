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
 * @return {number}
 */
// 递归
// var maxDepth = function(root) {
//     if (!root) return 0;
//     let leftDepth = maxDepth(root.left);
//     let rightDepth = maxDepth(root.right);
//     return 1 + Math.max(leftDepth, rightDepth);
// };

// 迭代
var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [];
    res = 0;
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--
        }
        res++;
    }
    return res;
};