// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorial(n){
    let sum=1;
    for(let i=1;i<=n;i++){
        sum*=i;
        
    }
    return sum;
}
console.log(factorial(5))