/*
Create a function that takes in an array of integers and returns a new array with all the even numbers squared.

Constraints
The input array will have at least one element and at most 10^5 elements.
The integers in the array will be in the range [-10^5, 10^5].

Note
You can use any way to solve this problem, using functional programming or using loops, it's up to you.
*/

// Examples

// evenSquares([1, 2, 3, 4, 5]) should return [4, 16]
// evenSquares([6, 7, 8, 9, 10]) should return [36, 64, 100]

//time and space complexity will be O(n) - worst case scenario, where all the input numbers are even, the output array will have the same number of elements as the input array.

//solution
function evenSquares(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num ** 2);
  }
  