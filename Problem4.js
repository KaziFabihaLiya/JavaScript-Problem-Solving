// Problem 4: Find the Maximum Number
// Example:

// Input: [5, 1, 9, 3]
// Output: 9

function maxNum(arr){
    var max = arr[0];
    for (let i=1; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNum([5,1,9,3]))