/*
Write a function called sumArray that takes an array of numbers and returns the sum of all the numbers in the array.
*/

//Function will take an array of numbers and return a number (sum of all the numbers in the array)

//Examples
sumArray([1, 2, 3, 4, 5]); // returns 15
sumArray([10, 20, 30]); // returns 60
sumArray([-5, 10, 15]); // returns 20

// Define a function called sumArray that takes an array as an argument.
function sumArray(arr) {
    // Initialize a variable total to 0.
    let total = 0;
    // Loop through each number in the array.
    // Add the current number to total.
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    // Return total.
    return total;
  }

//Time complexity: This will take a linear time since we are passing through each array element O(n)
//Space complexity:  O(1) since total only holds a single value at all times i.e. a constant amount of space in memory, regardless of the size of the input array
//This problem can also be solved using array methods like forEach and reduce  
  