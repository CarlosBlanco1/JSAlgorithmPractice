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
 * @return {boolean}
 */
var isBalanced = function(root) {

    var isBalanced = true;
    
    var DFS = function(root, currHeight) {
        if(!root) return currHeight - 1;

        var leftHeight = DFS(root.left, currHeight + 1);
        var rightHeight = DFS(root.right, currHeight + 1);

        if(Math.abs(leftHeight - rightHeight) > 1) isBalanced = false;
        return Math.max(leftHeight, rightHeight);
    }

    DFS(root, 0);
    return isBalanced;
};