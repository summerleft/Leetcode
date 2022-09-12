/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) return null;
    const temp = postorder[postorder.length - 1];
    const root = new TreeNode(temp);
    const leftSize = inorder.indexOf(temp);
    root.left = buildTree(inorder.slice(0, leftSize), postorder.slice(0, leftSize));
    root.right = buildTree(inorder.slice(leftSize + 1), postorder.slice(leftSize, postorder.length - 1));
    return root;
};