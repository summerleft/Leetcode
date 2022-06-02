/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
    const stack = [];
    let cur = root;
    let find = false;
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            if (find) {
                return cur;
            }
            if (cur === p) {
                find = true;
            }
            cur = cur.right;
        }
    }
    return null;
};