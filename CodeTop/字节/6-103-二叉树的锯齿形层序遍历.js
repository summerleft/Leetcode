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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    // true为从左到右，false为从右到左
    let direction = true;
    while (queue.length) {
        // 每一行的遍历结果数组
        let tempRes = [];
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            if (direction) {
                tempRes.push(cur.val);
            } else {
                tempRes.unshift(cur.val);
            }
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
        direction = !direction;
        res.push(tempRes);   
    }
    return res;
};