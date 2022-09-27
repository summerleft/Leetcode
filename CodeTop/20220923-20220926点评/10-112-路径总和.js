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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const path = [];
    const travelsal = function(cur, path, targetSum) {
        path.push(cur.val);
        if (!cur.left && !cur.right) {
            const sum = path.reduce((pre, cur) => pre + cur);
            if (sum === targetSum) return true;
        }
        if (cur.left) {
            if (travelsal(cur.left, path, targetSum)) return true;
            path.pop();
        }
        if (cur.right) {
            if (travelsal(cur.right, path, targetSum)) return true;
            path.pop();
        }
    }
    return Boolean(travelsal(root, path, targetSum));

};

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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const stack = [root];
    const paths = [0];
    while (stack.length) {
        let path = paths.pop();
        const node = stack.pop();
        path += node.val;
        if (!node.left && !node.right && path === targetSum) {
            return true;
        }
        if (node.left) {
            stack.push(node.left);
            paths.push(path);
        }
        if (node.right) {
            stack.push(node.right);
            paths.push(path);
        }
    }
    return false;
};

