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
 var maxDepth = function(root) {
    let res = 0;
    if (!root) return res;
    const queue = [root];
    while (queue.length) {
        res++;
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
    }
    return res;
};