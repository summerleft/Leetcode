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
 * @return {number[]}
 */
 var largestValues = function(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while (queue.length) {
        let temp = queue.map((root) => root.val);
        let max = temp[0];
        for (const num of temp) {
            max = max >= num ? max : num;
        }
        res.push(max);
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