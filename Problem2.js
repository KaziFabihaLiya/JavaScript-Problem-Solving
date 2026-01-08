
// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function countVowel(str){
    let count = 0;
    for (let i=0; i<str.length;i++){
        let ch = str[i].toLowerCase();
        if(ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
            count++;
        }
    }
    return count;
}

console.log(countVowel("programming"));