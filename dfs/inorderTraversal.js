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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if(!root) return [];

    var nodes = [];

    let DFS = function(root) {
        if(root.left) DFS(root.left);
        nodes.push(root.val);
        if(root.right) DFS(root.right);
    }

    DFS(root);

    return nodes;
};