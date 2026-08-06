function threeSum(numbers) {
    var triplets = {};

    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const elementToLookFor = element * -1;

        var p1 = i + 1;
        var p2 = numbers.length - 1;
        
        while(p1 < p2)
        {
            var sum = numbers[p1] + numbers[p2];

            if (sum == elementToLookFor) 
            {
                var sortedTriplet = [element, numbers[p1], numbers[p2]].sort((a, b) => a -b)
                var sortedTripletKey = JSON.stringify(sortedTriplet);
                triplets[sortedTripletKey] = sortedTriplet;
            }
        
            if(sum > elementToLookFor)
            {
                p2--;
            }
            else
            {
                p1++;
            }
        }
    }

    return Object.values(triplets);
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
[[-1,-1,2],[-1,0,1]]

console.log(threeSum([0, 1, 1]));
// []

console.log(threeSum([0, 0, 0]));
// [[0,0,0]]

console.log(threeSum([0, 0, 0, 0]));
// [[0,0,0]]

console.log(threeSum([-2, 0, 0, 2, 2]));
// [[-2,0,2]]

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
// [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]

console.log(threeSum([]));
// []

console.log(threeSum([0]));
// []

console.log(threeSum([1, 2, -2, -1]));
//[]