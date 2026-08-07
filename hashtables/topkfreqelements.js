function topKFrequent(nums, k) {
    var numToFreq = new Map();

    for (let i = 0; i < nums.length; i++) {
        var newNum = nums[i];
        numToFreq.set(newNum, numToFreq.has(newNum) ? (numToFreq.get(newNum) + 1) : 1);
    }

    var asArr = Array.from(numToFreq);

    asArr.sort((a, b) => b[1] - a[1]);

    return asArr.slice(0, k).map(([key, _]) => key);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [1, 2] — order may vary

console.log(topKFrequent([1], 1));
// [1]

console.log(topKFrequent([4, 4, 4, 6, 6, 2, 2, 2, 2, 9], 3));
// [2, 4, 6] — order may vary

console.log(topKFrequent([-1, -1, -2, -2, -2, 0], 2));
// [-2, -1] — order may vary