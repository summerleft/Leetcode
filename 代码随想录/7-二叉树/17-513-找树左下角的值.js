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
// 层序遍历
var findBottomLeftValue = function(root) {
    let queue = [root];
    let res = [];
    while (queue.length) {
        res = queue.map((node) => node.val);
        let len = queue.length;
        while (len) {
            let node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            len--
        }
    }
    return res[0];
};

// 递归
var findBottomLeftValue = function(root) {
    let maxLen = 0;
    let resNode = null;
    let traversal = function(node, leftLen) {
        if (!node.left && !node.right) {
            if (leftLen > maxLen) {
                maxLen = leftLen;
                resNode = node.val;
            }
        }
        if (node.left) {
            traversal(node.left, leftLen + 1);
        }
        if (node.right) {
            traversal(node.right, leftLen + 1);
        }
    }
    traversal(root, 1);
    return resNode;
};