import TreeNode from "../bfs/treenode.js"

function maxDepth(root) {

    if(root == null) return 0;
    
    return DFS(root, 1);

}

function DFS(root, level) {

    if(!root) return 0;

    return Math.max(level, DFS(root.left, level + 1), DFS(root.right, level + 1));
}

const testCases = [
  {
    root: new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    expected: 3,
  },
  {
    root: null,
    expected: 0,
  },
  {
    root: new TreeNode(1),
    expected: 1,
  },
  {
    root: new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4))
      )
    ),
    expected: 4,
  },
];

for (const { root, expected } of testCases) {
  const actual = maxDepth(root);

  console.log({
    actual,
    expected,
    passed: JSON.stringify(actual) === JSON.stringify(expected),
  });
}