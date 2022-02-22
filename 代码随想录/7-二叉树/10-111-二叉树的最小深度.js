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
var minDepth = function(root) {
    if (!root) {
        return 0;
    } else if (!root.left) {
        return minDepth(root.right) + 1;
    } else if (!root.right) {
        return minDepth(root.left) + 1;
    } else {
        return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    }
};

// 迭代
var minDepth = function(root) {
    if (!root) return 0;
    let res = 0;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        res++;
        while (len) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            if (!node.left && !node.right) return res;
            len--
        }        
    }
    return res;
};