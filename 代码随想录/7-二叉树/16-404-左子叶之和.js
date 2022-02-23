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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let leftValue = sumOfLeftLeaves(root.left);
    let rightValue = sumOfLeftLeaves(root.right);
    let midValue = 0;
    if (root.left && !root.left.left && !root.left.right) {
        midValue = root.left.val;
    }
    return leftValue + rightValue + midValue;
};

// 迭代
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let res = 0;
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            if (cur.left && !cur.left.left && !cur.left.right) {
                res += cur.left.val;
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--
        }
    }
    return res
};