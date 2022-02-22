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
 * @return {string[]}
 */
// 递归
var binaryTreePaths = function(root) {
    if (!root) return [];
    let result = [], path = [];
    travelsal(root, path, result);
    return result;
};

let travelsal = function(cur, path, result) {
    path.push(cur.val);
    if (!cur.left && !cur.right) {
        let pathStr = '';
        for (let i = 0; i < path.length - 1; i++) {
            pathStr += path[i];
            pathStr += '->';
        }
        pathStr += path[path.length - 1];
        result.push(pathStr);
        return;
    }
    if (cur.left) {
        travelsal(cur.left, path, result);
        path.pop();
    }
    if (cur.right) {
        travelsal(cur.right, path, result);
        path.pop();
    }
}

// 迭代
var binaryTreePaths = function(root) {
    if (!root) return [];
    let res = [];
    let stack = [root];
    let paths = [''];
    while (stack.length) {
        let node = stack.pop();
        let path = paths.pop();
        if (!node.left && !node.right) {
            res.push(path + node.val);
            continue;
        }
        path += node.val + '->';
        if (node.right) {
            stack.push(node.right);
            paths.push(path);
        }
        if (node.left) {
            stack.push(node.left);
            paths.push(path);
        }
    }
    return res;
};