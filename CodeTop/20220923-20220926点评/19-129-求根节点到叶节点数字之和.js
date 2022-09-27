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
 var sumNumbers = function(root) {
    const res = [];
    const path = [];
    backtracking(root);
    let sum = 0;
    res.forEach(item => {
        sum += parseInt(item.join(''));
    })
    return sum;

    function backtracking(root) {
        path.push(root.val);
        if (!root.left && !root.right) {
            res.push([...path]);
        }
        if (root.left) {
            backtracking(root.left);
            path.pop();
        }
        if (root.right) {
            backtracking(root.right);
            path.pop();
        }
    }
};