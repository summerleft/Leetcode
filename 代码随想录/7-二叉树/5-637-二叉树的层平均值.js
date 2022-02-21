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
 var averageOfLevels = function(root) {
    const res = [];
    const queue = [root];
    while (queue.length) {
        res.push(getAverage(queue.map((root) => root.val)));
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

let getAverage = function(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}