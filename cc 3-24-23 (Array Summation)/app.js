//Write a function in JavaScript that takes an array of integers and returns the sum of all the positive numbers in the array.

//Function takes in an array of integers and returns a single integer 

//examples
sumOfPositiveNumbers([1, 2, 3, -4, -5, 6]); // Output: 12
sumOfPositiveNumbers([-1, -2, -3]); // Output: 0
sumOfPositiveNumbers([10, -5, 4, -3, 6]); // Output: 20

//solution
function sumOfPositiveNumbers(arr) {
  let sum = 0 //Initialize a variable called 'sum' to 0
  for (let i = 0; i < arr.length; i++) {  //Loop through the input array
    if (arr[i] > 0) {
      sum += arr[i] //If the current element is greater than 0, add it to the 'sum' variable
    }
  }
  return sum
}

//time complexity of this solution is O(n), where n is the length of the input array
//space complexity is O(1)
