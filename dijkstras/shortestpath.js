/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    class PriorityQueue {
        constructor() {
            this.heap = [];
        }

        getLeftChildIndex(parentIndex) {
            return 2 * parentIndex + 1;
        }

        getRightChildIndex(parentIndex) {
            return 2 * parentIndex + 2;
        }

        getParentIndex(childIndex) {
            return Math.floor((childIndex - 1) / 2);
        }

        hasLeftChild(index) {
            return this.getLeftChildIndex(index)
                < this.heap.length;
        }

        hasRightChild(index) {
            return this.getRightChildIndex(index)
                < this.heap.length;
        }

        hasParent(index) {
            return this.getParentIndex(index) >= 0;
        }

        leftChild(index) {
            return this.heap[this.getLeftChildIndex(index)];
        }

        rightChild(index) {
            return this.heap[this.getRightChildIndex(index)];
        }

        parent(index) {
            return this.heap[this.getParentIndex(index)];
        }

        swap(indexOne, indexTwo) {
            const temp = this.heap[indexOne];
            this.heap[indexOne] = this.heap[indexTwo];
            this.heap[indexTwo] = temp;
        }

        peek() {
            if (this.heap.length === 0) {
                return null;
            }
            return this.heap[0];
        }

        remove() {
            if (this.heap.length === 0) {
                return null;
            }
            const item = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();
            this.heapifyDown();
            return item;
        }

        insert(item) {
            this.heap.push(item);
            this.heapifyUp();
        }

        heapifyUp() {
            let index = this.heap.length - 1;
            while (this.hasParent(index) && this.parent(index).d
                > this.heap[index].d) {
                this.swap(this.getParentIndex(index), index);
                index = this.getParentIndex(index);
            }
        }

        heapifyDown() {
            let index = 0;
            while (this.hasLeftChild(index)) {
                let smallerChildIndex = this.getLeftChildIndex(index);
                if (this.hasRightChild(index) && this.rightChild(index).d
                    < this.leftChild(index).d) {
                    smallerChildIndex = this.getRightChildIndex(index);
                }
                if (this.heap[index].d < this.heap[smallerChildIndex].d) {
                    break;
                } else {
                    this.swap(index, smallerChildIndex);
                }
                index = smallerChildIndex;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    let nodeToPaths = new Map();

    for (let i = 1; i <= n; i++) {
        nodeToPaths.set(i, []);
    }

    for (let i = 0; i < times.length; i++) {
        let record = times[i];
        let source = record[0];
        let target = record[1];
        let weight = record[2];

        nodeToPaths.get(source).push({ t: target, w: weight });
    }

    let dist = new Array(n).fill(Infinity);

    let pq = new PriorityQueue();
    pq.insert({ d: 0, n: k })

    dist[k - 1] = 0;

    while (pq.size() > 0) {
        let shortestNode = pq.remove();

        if(shortestNode.d > dist[shortestNode.n - 1]) continue;

        let pathsFromNode = nodeToPaths.get(shortestNode.n)

        for (let i = 0; i < pathsFromNode.length; i++) {
            let path = pathsFromNode[i];

            if ((path.w + shortestNode.d) < dist[path.t - 1]) {
                dist[path.t - 1] = (path.w + shortestNode.d);
                pq.insert({ d: dist[path.t - 1], n: path.t })
            }
        }
    }

    let cost = Math.max(...dist);
    return cost === Infinity? -1 : cost;
};