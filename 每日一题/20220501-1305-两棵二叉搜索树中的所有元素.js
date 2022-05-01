/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    let res1 = [], res2 = [], res = [];
    res1 = midOrder(root1, res1);
    res2 = midOrder(root2, res2);
    while (res1.length && res2.length) {
        if (res1[0] <= res2[0]) {
            res.push(res1.shift());
        } else {
            res.push(res2.shift());
        }
    }
    while (res1.length) {
        res.push(res1.shift());
    }
    while (res2.length) {
        res.push(res2.shift());
    }
    return res;
};

const midOrder = (root, res) => {
    if (!root) return res;
    midOrder(root.left, res);
    res.push(root.val);
    midOrder(root.right, res);
    return res;
}