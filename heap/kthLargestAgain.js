/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    class MinHeapK {
        constructor(k) {
            this.k = k;
            this.heap = [];
        }

        getLeftChildIndex(index) {
            return (index * 2) + 1;
        }

        getRightChildIndex(index) {
            return (index * 2) + 2;
        }

        getParentIndex(index) {
            return Math.floor((index - 1) / 2);
        }

        peek() {
            return this.heap[0];
        }

        insert(value) {

            if (this.heap.length == this.k) {
                if (this.peek() < value) {
                    this.heap[0] = value;
                    this.heapifyDown(0);
                }
            }
            else {
                this.heap.push(value);
                this.heapifyUp(this.heap.length - 1);
            }
        }

        heapifyDown(index) {
            if (this.k == 1) return;

            let value = this.heap[index];

            let smallestChildIndex = this.getLeftChildIndex(index);
            let smallestChildVal = this.heap[smallestChildIndex];

            if (this.k == 2) {
                if (smallestChildVal < value) {
                    [this.heap[index], this.heap[smallestChildIndex]] = [smallestChildVal, value]
                }
                return;
            }

            let rightChildIndex = this.getRightChildIndex(index);
            let rightChildVal = this.heap[rightChildIndex];

            if (smallestChildVal > rightChildVal) {
                smallestChildVal = rightChildVal;
                smallestChildIndex = rightChildIndex;
            }

            while (index < (this.k - 1) && smallestChildVal < value) {
                [this.heap[index], this.heap[smallestChildIndex]] = [smallestChildVal, value]
                index = smallestChildIndex;

                smallestChildIndex = this.getLeftChildIndex(index);
                smallestChildVal = this.heap[smallestChildIndex];

                rightChildIndex = this.getRightChildIndex(index);
                rightChildVal = this.heap[rightChildIndex];

                if (smallestChildVal > rightChildVal) {
                    smallestChildVal = rightChildVal;
                    smallestChildIndex = rightChildIndex;
                }
            }

        }

        heapifyUp(index) {

            let val = this.heap[index];

            let parentIndex = this.getParentIndex(index);
            let parentVal = this.heap[parentIndex];

            while (index > 0 && val < parentVal) {
                [this.heap[index], this.heap[parentIndex]] = [parentVal, val]
                index = parentIndex;

                parentIndex = this.getParentIndex(index);
                parentVal = this.heap[parentIndex];
            }
        }
    }

    let minHeapK = new MinHeapK(k);

    for (const num of nums) {
        minHeapK.insert(num);
    }

    return minHeapK.peek();

};