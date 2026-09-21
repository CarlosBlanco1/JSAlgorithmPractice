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
var diameterOfBinaryTree = function (root) {
    var largestSum = -Infinity;

    var findDeepest = function (root) {
        if(!root) return 0;
        let deepestLeft = findDeepest(root.left);
        let deepestRight = findDeepest(root.right);

        largestSum = Math.max(deepestLeft + deepestRight, largestSum);

        return Math.max(deepestLeft, deepestRight) + 1;
    }

    findDeepest(root);

    return largestSum;
};
