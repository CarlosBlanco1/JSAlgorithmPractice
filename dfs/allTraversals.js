import TreeNode from "../bfs/treenode.js";

function allTraversals(root) {

    var inOrderNodes = [];
    var preOrderNodes = [];
    var postOrderNodes = [];

    inOrderTraversal(root, inOrderNodes);
    preOrderTraversal(root, preOrderNodes);
    postOrderTraversal(root, postOrderNodes);

    return { "inorder": inOrderNodes, "preorder": preOrderNodes, "postorder": postOrderNodes };

}

function inOrderTraversal(root, nodes) {

    if (root.left) {
        inOrderTraversal(root.left, nodes);
    }

    nodes.push(root.val);

    if (root.right) {
        inOrderTraversal(root.right, nodes);
    }
}

function preOrderTraversal(root, nodes) {

    nodes.push(root.val);

    if (root.left) {
        preOrderTraversal(root.left, nodes);
    }

    if (root.right) {
        preOrderTraversal(root.right, nodes);
    }
}

function postOrderTraversal(root, nodes) {

    if (root.left) {
        postOrderTraversal(root.left, nodes);
    }

    if (root.right) {
        postOrderTraversal(root.right, nodes);
    }

    nodes.push(root.val);
}

const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5, new TreeNode(7))
    ),
    new TreeNode(
        3,
        null,
        new TreeNode(6)
    )
);

var results = {
    inorder: [4, 2, 7, 5, 1, 3, 6],
    preorder: [1, 2, 4, 5, 7, 3, 6],
    postorder: [4, 7, 5, 2, 6, 3, 1],
}

console.log(JSON.stringify(allTraversals(root)) == JSON.stringify(results))