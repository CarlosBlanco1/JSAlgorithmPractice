import TreeNode from './treenode.js';
import Queue from './queue.js';

function levelOrder(root) {
    if(!root) return [];
    
    var levels = [];
    var q = new Queue();
    q.enqueue(root);

    while(q.size() > 0)
    {
        var levelSize = q.size();
        var currLevel = [];

        while(levelSize > 0)
        {
            var curr = q.dequeue();
            currLevel.push(curr.val);

            if(curr.left)
            {
                q.enqueue(curr.left);
            }

            if(curr.right)
            {
                q.enqueue(curr.right);
            }

            levelSize--;
        }

        levels.push(currLevel);
    }

    return levels;
}

const testCases = [
  {
    root: new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    expected: [[3], [9, 20], [15, 7]],
  },
  {
    root: new TreeNode(1),
    expected: [[1]],
  },
  {
    root: null,
    expected: [],
  },
  {
    root: new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    ),
    expected: [[1], [2, 3], [4, 5]],
  },
];

for (const { root, expected } of testCases) {
  const actual = levelOrder(root);

  console.log({
    actual,
    expected,
    passed: JSON.stringify(actual) === JSON.stringify(expected),
  });
}