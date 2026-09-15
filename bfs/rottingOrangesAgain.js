/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    class Queue {
        constructor() {
            this.items = [];
            this.head = 0;
            this.tail = 0;
        }

        enqueue(value) {
            this.items[this.tail] = value;
            this.tail++;
        }

        dequeue() {
            let value = this.items[this.head];
            delete this.items[this.head];
            this.head++;
            return value;
        }

        size() {
            return this.tail - this.head;
        }
    }

    var q = new Queue();

    let m = grid.length;
    let n = grid[0].length;

    let freshOrangesNum = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                q.enqueue([i, j]);
            }
            else if (grid[i][j] === 1) {
                freshOrangesNum++;
            }
        }
    }

    if(q.size() === 0) return freshOrangesNum > 0? -1 : 0;

    let minutesEllapsed = -1;

    while (q.size() > 0) {
        minutesEllapsed++;

        let currSize = q.size();

        while (currSize > 0) {
            let curr = q.dequeue();

            if (curr[1] - 1 > -1) {
                let left = grid[curr[0]][curr[1] - 1]
                if (left === 1) {
                    freshOrangesNum--;
                    grid[curr[0]][curr[1] - 1] = 2;
                    q.enqueue([curr[0], curr[1] - 1])
                }
            }

            if (curr[1] + 1 < n) {
                let right = grid[curr[0]][curr[1] + 1]
                if (right === 1) {
                    freshOrangesNum--;
                    grid[curr[0]][curr[1] + 1] = 2;
                    q.enqueue([curr[0], curr[1] + 1])
                }
            }

            if (curr[0] - 1 > -1) {
                let up = grid[curr[0] - 1][curr[1]]
                if (up === 1) {
                    freshOrangesNum--;
                    grid[curr[0] - 1][curr[1]] = 2;
                    q.enqueue([curr[0] - 1, curr[1]])
                }
            }

            if (curr[0] + 1 < m) {
                let down = grid[curr[0] + 1][curr[1]]
                if (down === 1) {
                    freshOrangesNum--;
                    grid[curr[0] + 1][curr[1]] = 2;
                    q.enqueue([curr[0] + 1, curr[1]])
                }
            }

            currSize--;
        }
    }

    return freshOrangesNum === 0 ? minutesEllapsed : -1;
};