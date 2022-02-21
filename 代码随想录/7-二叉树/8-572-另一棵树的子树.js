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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (isSame(root, subRoot)) return true;
    else if (!root && subRoot) return false;
    let left = isSubtree(root.left, subRoot);
    let right = isSubtree(root.right, subRoot);
    return left || right;
};

let isSame = function(p, q) {
    if (!p && !q) return true;
    else if (!p && q) return false;
    else if (p && !q) return false;
    else if (p.val !== q.val) return false;
    let left = isSame(p.left, q.left);
    let right = isSame(p.right, q.right);
    return left && right;
}