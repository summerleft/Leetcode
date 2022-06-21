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
 var findBottomLeftValue = function(root) {
    const layerOrder = [];
    const queue = [];
    queue.push(root);
    while (queue.length) {
        let len = queue.length;
        const temp = [];
        while (len--) {
            let cur = queue.shift();
            temp.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        layerOrder.push(temp);
    }
    return layerOrder[layerOrder.length - 1][0];
};