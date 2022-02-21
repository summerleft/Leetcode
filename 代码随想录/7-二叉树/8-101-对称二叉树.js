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
var isSymmetric = function(root) {
    if (!root) return true;
    return compare(root.left, root.right);

};

let compare = function(left, right) {
    if (!left && right) return false;
    else if (left && !right) return false;
    else if (!left && !right) return true;
    else if (left.val !== right.val) return false;

    let outside = compare(left.left, right.right);
    let inside = compare(left.right, right.left);
    return outside && inside;
}

// 迭代
var isSymmetric = function(root) {
    if (!root) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();
        if (!leftNode && !rightNode) continue;
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
        queue.push(leftNode.left);
        queue.push(rightNode.right);
        queue.push(leftNode.right);
        queue.push(rightNode.left);
    }
    return true;
}