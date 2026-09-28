class CustomMinHeap {
    constructor(k) {
        this.heap = [];
        this.k = k;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(val) {

        if(this.heap.length === this.k && val < this.heap[0]) return;

        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);

        if (this.heap.length > this.k) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
        }
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }

    getRightChildIndex(index) {
        return (index * 2) + 2;
    }

    heapifyUp(index) {
        let currIndex = index;
        let parentIndex = this.getParentIndex(currIndex);

        let parentVal = this.heap[parentIndex];
        let currVal = this.heap[currIndex];

        while (parentIndex >= 0 && parentVal > currVal) {
            this.swap(currIndex, parentIndex);

            currIndex = parentIndex;
            parentIndex = this.getParentIndex(currIndex);

            parentVal = this.heap[parentIndex];
            currVal = this.heap[currIndex];
        }
    }

    heapifyDown(index) {
        let currIndex = index;
        let currValue = this.heap[currIndex];

        let smallestChildIndex = this.getLeftChildIndex(currIndex);
        let rightChildIndex = this.getRightChildIndex(currIndex);

        let smallestChild = this.heap[smallestChildIndex];
        let rightChild = this.heap[rightChildIndex];

        if (rightChild < smallestChild) {
            smallestChildIndex = rightChildIndex;
            smallestChild = this.heap[smallestChildIndex];
        }

        while (smallestChildIndex < this.heap.length && currValue > smallestChild) {
            this.swap(smallestChildIndex, currIndex);

            currIndex = smallestChildIndex;
            currValue = this.heap[currIndex];

            smallestChildIndex = this.getLeftChildIndex(currIndex);
            rightChildIndex = this.getRightChildIndex(currIndex);

            smallestChild = this.heap[smallestChildIndex];
            rightChild = this.heap[rightChildIndex];

            if (rightChild < smallestChild) {
                smallestChildIndex = rightChildIndex;
                smallestChild = this.heap[smallestChildIndex];
            }
        }
    }
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.minH = new CustomMinHeap(k);

    for(const num of nums)
    {
        this.minH.insert(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minH.insert(val);

    return this.minH.heap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */