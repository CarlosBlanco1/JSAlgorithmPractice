class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap.length == 0 ? null : this.heap[0];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return Math.floor((2 * i) + 1);
    }

    getRightChildIndex(i) {
        return Math.floor((2 * i) + 2);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length == 0;
    }

    heapifyUp(i) {
        if (this.size() <= 1) return;

        var currIndex = i;
        var parentIndex = this.getParentIndex(currIndex);

        var curr = this.heap[currIndex];
        var parent = this.heap[parentIndex];

        while (parent < curr && currIndex >= 0) {
            this.swap(currIndex, parentIndex);

            currIndex = parentIndex;
            parentIndex = this.getParentIndex(currIndex);

            curr = this.heap[currIndex];
            parent = this.heap[parentIndex];
        }
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.size() - 1);
    }

    heapifyDown(i) {
        if (this.size() <= 1) return;

        var currIndex = i;
        var biggestChildIndex = this.getLeftChildIndex(currIndex);
        var rightChildIndex = this.getRightChildIndex(currIndex);

        var biggestChild = this.heap[biggestChildIndex];
        var rightChild = this.heap[rightChildIndex];

        if (rightChild > biggestChild) {
            biggestChildIndex = rightChildIndex;
        }

        while ( (this.heap[biggestChildIndex] > this.heap[currIndex]) && ( currIndex < this.size() ) ) {
            this.swap(currIndex, biggestChildIndex);

            currIndex = biggestChildIndex;

            biggestChildIndex = this.getLeftChildIndex(currIndex);
            rightChildIndex = this.getRightChildIndex(currIndex);

            biggestChild = this.heap[biggestChildIndex];
            rightChild = this.heap[rightChildIndex];

            if (rightChild > biggestChild) {
                biggestChildIndex = rightChildIndex;
            }
        }
    }

    extractMax() {
        if (this.size() == 1) {
            return this.heap.pop();
        }
        else {
            var max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
            return max;
        }
    }
}

// maxheap.test.js
// Adjust the import path/method names to match your implementation.
// Assumed API: insert(val), extractMax(), peek(), size(), isEmpty()

const assert = require('assert');

function run(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (err) {
    console.error(`❌ ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

// Helper: extract everything and return array
function drain(heap) {
  const out = [];
  while (!heap.isEmpty()) out.push(heap.extractMax());
  return out;
}

// ---------------------------------------------------------
run('new heap is empty', () => {
  const h = new MaxHeap();
  assert.strictEqual(h.isEmpty(), true);
  assert.strictEqual(h.size(), 0);
});

run('insert increases size', () => {
  const h = new MaxHeap();
  h.insert(5);
  assert.strictEqual(h.size(), 1);
  assert.strictEqual(h.isEmpty(), false);
});

run('peek returns max without removing it', () => {
  const h = new MaxHeap();
  h.insert(10);
  h.insert(3);
  h.insert(7);
  assert.strictEqual(h.peek(), 10);
  assert.strictEqual(h.size(), 3); // unchanged
});

run('extractMax returns and removes the max', () => {
  const h = new MaxHeap();
  h.insert(10);
  h.insert(3);
  h.insert(7);
  assert.strictEqual(h.extractMax(), 10);
  assert.strictEqual(h.size(), 2);
  assert.strictEqual(h.peek(), 7);
});

run('extracts in fully sorted order (descending)', () => {
  const h = new MaxHeap();
  const input = [9, 4, 7, 1, -2, 6, 26, 0, 15];
  input.forEach(v => h.insert(v));
  const result = drain(h);
  const expected = [...input].sort((a, b) => b - a);
  assert.deepStrictEqual(result, expected);
});

run('handles duplicate values correctly', () => {
  const h = new MaxHeap();
  [5, 5, 5, 1, 1, 9].forEach(v => h.insert(v));
  assert.deepStrictEqual(drain(h), [9, 5, 5, 5, 1, 1]);
});

run('handles negative numbers', () => {
  const h = new MaxHeap();
  [-5, -1, -10, 0, 3].forEach(v => h.insert(v));
  assert.deepStrictEqual(drain(h), [3, 0, -1, -5, -10]);
});

run('single element heap', () => {
  const h = new MaxHeap();
  h.insert(42);
  assert.strictEqual(h.peek(), 42);
  assert.strictEqual(h.extractMax(), 42);
  assert.strictEqual(h.isEmpty(), true);
});

run('extractMax on empty heap (should not silently corrupt state)', () => {
  const h = new MaxHeap();
  const result = h.extractMax();
  // Depending on your design this might return undefined/null or throw.
  // Adjust this assertion to match your intended contract.
  assert.ok(result === undefined || result === null,
    'Expected undefined/null on empty extractMax — update if your impl throws instead');
});

run('insert after emptying heap still works', () => {
  const h = new MaxHeap();
  h.insert(1);
  h.extractMax();
  h.insert(20);
  h.insert(5);
  assert.strictEqual(h.peek(), 20);
});

run('large random dataset matches Array.sort', () => {
  const h = new MaxHeap();
  const input = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000) - 5000);
  input.forEach(v => h.insert(v));
  const result = drain(h);
  const expected = [...input].sort((a, b) => b - a);
  assert.deepStrictEqual(result, expected);
});

run('already sorted (descending) input still heapifies correctly', () => {
  const h = new MaxHeap();
  const input = [7, 6, 5, 4, 3, 2, 1];
  input.forEach(v => h.insert(v));
  assert.deepStrictEqual(drain(h), input);
});

run('reverse sorted (ascending) input still heapifies correctly', () => {
  const h = new MaxHeap();
  const input = [1, 2, 3, 4, 5, 6, 7];
  input.forEach(v => h.insert(v));
  assert.deepStrictEqual(drain(h), [7, 6, 5, 4, 3, 2, 1]);
});

run('size tracks correctly through mixed operations', () => {
  const h = new MaxHeap();
  h.insert(1); h.insert(2); h.insert(3);
  assert.strictEqual(h.size(), 3);
  h.extractMax();
  assert.strictEqual(h.size(), 2);
  h.insert(10);
  assert.strictEqual(h.size(), 3);
  h.extractMax(); h.extractMax(); h.extractMax();
  assert.strictEqual(h.size(), 0);
  assert.strictEqual(h.isEmpty(), true);
});