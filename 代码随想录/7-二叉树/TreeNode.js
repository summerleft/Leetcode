function TreeNode(val, left, right) {
    this.val = (this.val === undefined ? 0 : val);
    this.left = (this.left === undefined ? null : val);
    this.right = (this.right === undefined ? null : val);
}

export default TreeNode;

let input = [3,9,20,null,null,15,7];
