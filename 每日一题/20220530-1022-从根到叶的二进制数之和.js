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
 var sumRootToLeaf = function(root) {
    return dfs(root, 0);
};

const dfs = (root, cur) => {
    let ans = 0, ncur = (cur << 1) + root.val;
    if (root.left) ans += dfs(root.left, ncur);
    if (root.right) ans += dfs(root.right, ncur);
    return (!root.left && !root.right) ? ncur: ans;
}