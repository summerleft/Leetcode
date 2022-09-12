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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const res = [];
    const path = [];
    backtracking(root);
    return res.map(item => item.join('->'));

    function backtracking(root) {
        if (!root.left && !root.right) {
            res.push([...path, root.val]);
            return;
        }
        path.push(root.val);
        root.left && backtracking(root.left);
        root.right && backtracking(root.right);
        path.pop();
    }
};