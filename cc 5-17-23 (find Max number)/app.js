/*
Find the Maximum Number in an Array

Write a function called findMaxNumber that takes an array of numbers as input and returns the maximum number in the array.
*/


//solution
function findMaxNumber(arr){
    let max = 0
    for(let number of arr){
        max = Math.max(number, max)
    }
    return max
}
//example 
console.log(findMaxNumber([5, 2, 9, 1, 7, 4])); // Output: 9
console.log(findMaxNumber([10, 20, 30, 40, 50])); // Output: 50
console.log(findMaxNumber([-1, -5, -10, -3])); // Output: -1
console.log(findMaxNumber([100])); // Output: 100
console.log(findMaxNumber([])); // Output: undefined (since the array is empty)
