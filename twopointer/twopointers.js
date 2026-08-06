maxArea = (heights) => {
    var pointer1 = 0;
    var pointer2 = heights.length - 1;

    var maxArea = 0;

    while (pointer1 < pointer2) {
        var height1 = heights[pointer1];
        var height2 = heights[pointer2];

        var currentArea = Math.min(height1, height2) * (pointer2 - pointer1);

        if(currentArea > maxArea)
        {
            maxArea = currentArea;
        }

        if(height1 < height2)
        {
            pointer1++;
        }
        else
        {
            pointer2--;
        }
    }

    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));               // 1
console.log(maxArea([4,3,2,1,4]));         // 16
console.log(maxArea([1,2,1]));             // 2
console.log(maxArea([1,2,4,3]));           // 4
console.log(maxArea([0,0]));               // 0
console.log(maxArea([2,3,4,5,18,17,6]));   // 17
console.log(maxArea([1,3,2,5,25,24,5]));   // 24
