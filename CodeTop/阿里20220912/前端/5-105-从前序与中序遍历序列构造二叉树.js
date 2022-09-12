/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    const temp = preorder[0];
    const leftSize = inorder.indexOf(temp);
    const root = new TreeNode(temp);
    root.left = buildTree(preorder.slice(1, leftSize + 1), inorder.slice(0, leftSize));
    root.right = buildTree(preorder.slice(leftSize + 1), inorder.slice(leftSize + 1));
    return root;
};