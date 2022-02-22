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
// 普通二叉树 递归
var countNodes = function(root) {
    if (!root) return 0;
    let leftNum = countNodes(root.left);
    let rightNum = countNodes(root.right);
    return leftNum + rightNum + 1;
};

// 普通二叉树 迭代
var countNodes = function(root) {
    if (!root) return 0;
    let count = 0;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let size = queue.length;
        count += size;
        while (size) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            size--;
        }
    }
    return count;
};

// 完全二叉树 递归
var countNodes = function(root) {
    if (!root) return 0;
    let left = root.left;
    let right = root.right;
    let leftDepth = 0, rightDepth = 0;
    while (left) {
        left = left.left;
        leftDepth++;
    }
    while (right) {
        right = right.right;
        rightDepth++;
    }
    if (leftDepth === rightDepth) return 2 ** (leftDepth + 1) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};