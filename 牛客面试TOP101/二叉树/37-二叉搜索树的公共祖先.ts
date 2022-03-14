class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param root TreeNode类 
 * @param p int整型 
 * @param q int整型 
 * @return int整型
 */
 export function lowestCommonAncestor(root: TreeNode, p: number, q: number): number {
    // write code here
    return commonAncestor(root, p, q).val;
}

function commonAncestor(root: TreeNode, p: number, q: number): TreeNode {
    if (!root || root.val === p || root.val === q) return root;
    if (p < root.val && q < root.val) return commonAncestor(root.left, p, q);
    if (p > root.val && q > root.val) return commonAncestor(root.right, p, q);
    else return root;
}