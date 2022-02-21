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
// 递归
var postorderTraversal = function(root, res=[]) {
    if (!root) return res;
    postorderTraversal(root.left, res);
    postorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};  

var postorderTraversal = function(root, res=[]) {
    if (!root) return res;
    const stack = [root];
    let cur = null;
    while (stack.length) {
        cur = stack.pop();
        cur.left && stack.push(cur.left);
        cur.right && stack.push(cur.right);
        res.push(cur.val);
    }
    return res.reverse();
}