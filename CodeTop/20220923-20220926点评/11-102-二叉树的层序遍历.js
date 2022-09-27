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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const res = [];
    if (!root) return res;
    const queue = [];
    queue.push(root);
    while (queue.length) {
        const temp = [];
        let len = queue.length;
        while (len--) {
            const cur = queue.shift();
            temp.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(temp);
    }
    return res;
};