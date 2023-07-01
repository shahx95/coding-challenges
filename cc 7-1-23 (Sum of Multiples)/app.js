// Challenge: Sum of Multiples
// Write a function that takes two integers, num1 and num2, and finds the sum of all the multiples of num1 and num2 below a given limit.

/*
Example:
Input: num1 = 3, num2 = 5, limit = 20
Output: 78
Explanation: The multiples of 3 and 5 below 20 are 3, 5, 6, 9, 10, 12, 15, and 18. Their sum is 78.
*/

//solution:
function sumOfMultiples(num1, num2, limit) {
    const sumOfNum1 = calculateSumOfMultiples(num1, limit)
    const sumOfNum2 = calculateSumOfMultiples(num2, limit)
    const sumOfCommonMultiples = calculateSumOfMultiples(num1 * num2, limit)
    
    return sumOfNum1 + sumOfNum2 - sumOfCommonMultiples
  }
  
  function calculateSumOfMultiples(num, limit) {
    const n = Math.floor((limit - 1) / num)
    return (num * n * (n + 1)) / 2
  }
  
  // Example:
  console.log(sumOfMultiples(3, 5, 20)) // Output: 78
  