/*
Challenge: Write a function that takes in an array of numbers and returns the sum of all the positive numbers in the array.

Requirements:

The function should be named sumPositiveNumbers.
It should take one parameter: an array of numbers.
The function should return the sum of all the positive numbers in the array.
If the array is empty or contains no positive numbers, the function should return 0.
*/


function sumPositiveNumbers(arr){
    let total = 0 //space complexity O(1)
    for(number of arr){ //time complexity O(n)
        if(number > 0){
            total = total + number
        }
    }
    return total
}

const numbers = [-2, 5, 10, -8, 3, -1, 0, 6];
console.log(sumPositiveNumbers(numbers)); // Output: 24

const emptyArray = [];
console.log(sumPositiveNumbers(emptyArray)); // Output: 0

const noPositiveNumbers = [-10, -5, -8];
console.log(sumPositiveNumbers(noPositiveNumbers)); // Output: 0
