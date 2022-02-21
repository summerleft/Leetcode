function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null: right);
}

// 前序递归
var invertTree = function(root) {  
    if (!root) return root;
    [root.left, root.right] = [root.right, root.left]
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 前序迭代
var invertTree = function(root) {  
    if (!root) return root;
    const stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        if (cur) {
            cur.right && stack.push(cur.right);
            cur.left && stack.push(cur.left);
            stack.push(cur);
            stack.push(null);
        } else {
            let node = stack.pop();
            [node.left, node.right] = [node.right, node.left];
        }
    }
    return root;
};

// 层序遍历
var invertTree = function(root) {  
    if (!root) return root;
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len) {
            let cur = queue.shift();
            [cur.left, cur.right] = [cur.right, cur.left];
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
            len--;
        }
    }
    return root;
};