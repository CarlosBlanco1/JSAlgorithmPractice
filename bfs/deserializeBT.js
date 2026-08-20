/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return JSON.stringify([]);

    var q = new QueueC();
    var vals = [];

    q.enqueue(root);

    while(q.size() > 0)
    {
        var curr = q.dequeue();

        if(curr == null)
        {
            vals.push(null);
            continue;
        }

        vals.push(curr.val);
        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }

    return JSON.stringify(vals);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var vals = JSON.parse(data);

    if(vals.length == 0) return null;

    var aQ = new QueueC();
    var gQ = new QueueC();

    var root = new TreeNode(vals[0]);
    aQ.enqueue(root);

    for(let i = 1; i < vals.length; i++)
    {
        gQ.enqueue(vals[i]);
    }

    while(aQ.size() > 0)
    {
        var currA = aQ.dequeue();

        var leftVal = gQ.dequeue();
        var rightVal = gQ.dequeue();

        var leftNode = null;
        var rightNode = null;

        if(leftVal != null)
        {
            leftNode = new TreeNode(leftVal);
            aQ.enqueue(leftNode);
        }

        if(rightVal != null)
        {
            rightNode = new TreeNode(rightVal);
            aQ.enqueue(rightNode);
        }

        currA.left = leftNode;
        currA.right = rightNode;
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

class QueueC {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.head];
  }

  isEmpty() {
    return this.tail - this.head === 0;
  }

  size() {
    return this.tail - this.head;
  }
}