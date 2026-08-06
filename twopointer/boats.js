const numRescueBoats = function (people, limit) {
    
    people.sort((a, b) => a - b);
    p1 = 0;
    p2 = people.length - 1;
    boats = 0;

    while(p1 < p2)
    {
        person1 = people[p1];
        person2 = people[p2];

        if(person1 + person2 <= limit)
        {
            boats++;
            p1++;
            p2--;
            continue;
        }
        else
        {
            boats++;
            p2--;
        }
    }

    if(p1 == p2)
    {
        boats++;
    }

    return boats;
}

console.log(numRescueBoats([3, 2, 2, 1], 3));
// Expected: 3

console.log(numRescueBoats([1, 2], 3));
// Expected: 1

console.log(numRescueBoats([3, 5, 3, 4], 5));
// Expected: 4

console.log(numRescueBoats([2, 2, 2, 2], 4));
// Expected: 2

console.log(numRescueBoats([2, 2, 2, 2], 3));
// Expected: 4

console.log(numRescueBoats([1, 1, 1, 1], 2));
// Expected: 2

console.log(numRescueBoats([1, 1, 1, 1], 3));
// Expected: 2

console.log(numRescueBoats([5], 5));
// Expected: 1

console.log(numRescueBoats([5, 5, 5], 5));
// Expected: 3

console.log(numRescueBoats([1, 2, 3, 4, 5], 5));
// Expected: 3
// Boats: [1,4], [2,3], [5]

console.log(numRescueBoats([1, 2, 3, 4, 5], 6));
// Expected: 3
// Boats: [1,5], [2,4], [3]

console.log(numRescueBoats([4, 2, 1, 3], 4));
// Expected: 3
// Boats: [1,3], [2], [4]

console.log(numRescueBoats([1, 2, 2, 3], 3));
// Expected: 3
// Boats: [1,2], [2], [3]

console.log(numRescueBoats([1, 1, 2, 2, 3, 3], 4));
// Expected: 3
// Boats: [1,3], [1,3], [2,2]

console.log(numRescueBoats([2, 3, 4, 5], 5));
// Expected: 3
// Boats: [2,3], [4], [5]