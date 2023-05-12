/*
Challenge: Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
Requirements:

The function should be named sumEvenNumbers.
The function should take one parameter, an array of numbers.
The function should return the sum of all the even numbers in the array.
If the array is empty or contains no even numbers, the function should return 0.
*/

//example
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); // Output: 12 (2 + 4 + 6 = 12)

//solution
function sumEvenNumbers(numbers){
    if(Array.isArray(numbers) && numbers.length > 0){
        return numbers.reduce((total,current)=>current%2===0?total+current:total,0) //O(n) time complexity and O(1) space complexity
    }
    return 0
}