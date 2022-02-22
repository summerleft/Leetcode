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
 * @return {boolean}
 */
// 递归
var isBalanced = function(root) {
    return getHeight(root) !== -1;
};

let getHeight = function(root) {
    if (!root) return 0;
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    if (leftHeight === -1 || rightHeight === -1) return -1;
    return Math.abs(leftHeight - rightHeight) > 1 ? -1 : Math.max(leftHeight, rightHeight) + 1; 
}

// 迭代
