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
 * @return {number}
 */

var goodNodes = function(root) {
    let goodNodes = {count : 0}

    DFS(root, -Infinity, goodNodes);

    return goodNodes.count;
};

var DFS = function(node, highestVal, goodNodes) {

    if(!node) return;
    if(node.val >= highestVal) goodNodes.count++;
    
    let newHighestVal = highestVal < node.val ? node.val : highestVal;

    DFS(node.left, newHighestVal, goodNodes);
    DFS(node.right, newHighestVal, goodNodes);
};