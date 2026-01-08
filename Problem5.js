// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function DuplicateRemove(arr){
    let unique=[];
    for(let i=0; i<arr.length;i++){
        let dup = false;
        for(let j=0; j<unique.length;j++){
            if(arr[i]===unique[j]){
                dup=true;
                break;
            }
        }
        if(!dup){
            unique[unique.length]=arr[i];
        }
    }
    return unique;
}
console.log(DuplicateRemove([1, 2, 2, 3, 4, 4]))