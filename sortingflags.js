function sortColors(numbers) {

    var lookout = 0;
    var start = 0;

    while (lookout < 3) {

        var p1 = start;
        var p2 = numbers.length - 1;

        while (p1 < p2) {
            var num1 = numbers[p1];
            var num2 = numbers[p2];

            if (num1 == lookout) {
                p1++;
                start = p1;
            }
            else {
                if (num1 >= num2) {
                    var temp = numbers[p1];
                    numbers[p1] = num2;
                    numbers[p2] = temp;
                }
                p2--;
            }
        }

        if (numbers[start] == lookout) {
            start++;
        }
        lookout++;
    }
}

let a1 = [2, 0, 2, 1, 1, 0];
sortColors(a1);
console.log(a1); // [0,0,1,1,2,2]

let a2 = [2, 0, 1];
sortColors(a2);
console.log(a2); // [0,1,2]

let a3 = [0];
sortColors(a3);
console.log(a3); // [0]

let a4 = [1];
sortColors(a4);
console.log(a4); // [1]

let a5 = [0, 0, 0];
sortColors(a5);
console.log(a5); // [0,0,0]

let a6 = [2, 2, 2];
sortColors(a6);
console.log(a6); // [2,2,2]

let a7 = [1, 2, 0];
sortColors(a7);
console.log(a7); // [0,1,2]

let a8 = [0, 1, 2, 0, 1, 2, 0, 1, 2];
sortColors(a8);
console.log(a8); // [0,0,0,1,1,1,2,2,2]

let a9 = [];
sortColors(a9);
console.log(a9); // []