function mergeSort(nums, left, right) {

    if(left >= right) return;
 
    var mid = Math.trunc((left + right - 1) / 2);

    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    merge(nums, left, mid, right);

    return nums;
}

function merge (arr, left, mid, right) {

    var leftHalveSize = mid - left + 1;
    var rightHalveSize = right - mid;

    var L = new Array(leftHalveSize);
    var R = new Array(rightHalveSize);

    for (let i = 0; i < leftHalveSize; i++) {
        L[i] = arr[left + i];  
    }
    
    for (let j = 0; j < rightHalveSize; j++) {
        R[j] = arr[mid + j + 1];
    }

    var i = 0;
    var j = 0;
    var k = left;

    while(i < leftHalveSize && j < rightHalveSize) {
        
        if(L[i] < R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;   
    }

    while(i < leftHalveSize)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j < rightHalveSize)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}

var input = [3,8,10,4,2,1,1,6]

var expected = JSON.stringify([1,1,2,3,4,6,8,10]);
var returned = JSON.stringify(mergeSort(input, 0, input.length - 1));

console.log(returned);
console.log(returned == expected)