/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root, res=[]) {
    if (!root) return res;
    for (const child of root.children) {
        postorder(child, res);
    }
    res.push(root.val);
    return res;
};