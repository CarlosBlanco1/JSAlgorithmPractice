class MaxHeapTwitter {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
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

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(i) {
        let currIndex = i;
        let parentIndex = this.getParentIndex(currIndex);

        while (currIndex > 0 && (this.heap[currIndex][0] > this.heap[parentIndex][0])) {
            this.swap(currIndex, parentIndex);

            currIndex = parentIndex;
            parentIndex = this.getParentIndex(currIndex);
        }
    }

    heapifyDown(i) {
        console.log(this.heap, i)
        let currIndex = i;

        let leftChildIndex = this.getLeftChildIndex(currIndex);
        let greatestChildIndex = this.getRightChildIndex(currIndex);

        if (greatestChildIndex < this.heap.length) {
            greatestChildIndex = this.heap[leftChildIndex][0] < this.heap[greatestChildIndex][0] ?
                greatestChildIndex :
                leftChildIndex;
        }
        else {
            greatestChildIndex = leftChildIndex;
        }

        while (greatestChildIndex < this.heap.length && (this.heap[currIndex][0] < this.heap[greatestChildIndex][0]) ) {
            this.swap(currIndex, greatestChildIndex);
            currIndex = greatestChildIndex;

            leftChildIndex = this.getLeftChildIndex(currIndex);
            greatestChildIndex = this.getRightChildIndex(currIndex);

            if (greatestChildIndex < this.heap.length) {
                greatestChildIndex = this.heap[leftChildIndex][0] < this.heap[greatestChildIndex][0] ?
                    greatestChildIndex :
                    leftChildIndex;
            }
            else {
                greatestChildIndex = leftChildIndex;
            }
        }
    }

    insert(value) {
        this.heap.push(value);
        if (this.heap.length > 1) this.heapifyUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let returnItem = this.heap[0];
        this.heap[0] = this.heap.pop();

        if (this.heap.length > 1) this.heapifyDown(0);
        return returnItem;
    }

}

var Twitter = function () {
    this.tweets = new Map();
    this.following = new Map();
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, []);
    this.tweets.get(userId).push([this.time++, tweetId]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let maxH = new MaxHeapTwitter();
    let feed = [];

    let users = this.following.get(userId) ?? new Set();
    users.add(userId)

    for (const u of users) {
        let list = this.tweets.get(u);

        if (list) {
            let index = list.length - 1;
            //TIME, TWEETID, USERID, INDEX
            maxH.insert([list[index][0], list[index][1], u, index]);
        }
    }

    while (feed.length < 10 && maxH.size() > 0) {
        let popped = maxH.remove();
        feed.push(popped[1]);

        if (popped[3] > 0) {
            let recentUserTweets = this.tweets.get(popped[2]);

            maxH.insert([recentUserTweets[popped[3] - 1][0], recentUserTweets[popped[3] - 1][1], popped[2], popped[3] - 1]);
        }
    }

    return feed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.following.has(followerId)) this.following.set(followerId, new Set());
    this.following.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    let s = this.following.get(followerId);
    if (s) s.delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */