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
var isUnivalTree = function(root) {
    const val = root.val;
    const dfs = (root) => {
        return root === null || (root.val === val && dfs(root.left) && dfs(root.right));
    }
    return dfs(root);
};