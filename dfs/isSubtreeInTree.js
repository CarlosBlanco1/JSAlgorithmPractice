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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    if(!root) return false;

    if(areSametree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var areSametree = function(a, b) {
    if(!a && !b) return true;
    if(!a || !b) return false;
    
    return a.val == b.val && areSametree(a.left, b.left) && areSametree(a.right, b.right);
}