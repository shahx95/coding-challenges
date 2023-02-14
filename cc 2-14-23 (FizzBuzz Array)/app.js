/*
Problem: fizzBuzz
Write a function fizzBuzz that takes in an integer n and returns an array of strings, where each string is either "fizz", "buzz", "fizzbuzz", or the corresponding number as a string. The array should start from 1 and end at n.
*/

// Input will be an integer n (1 <= n <= 10^3)
// Output will be an array of strings where each string is either "fizz", "buzz", "fizzbuzz", or the corresponding number as a string.

//examples
fizzBuzz(15)    // => ['1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz']
fizzBuzz(5)     // => ['1', '2', 'fizz', '4', 'buzz']

//solution
function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("fizzbuzz");
      } else if (i % 3 === 0) {
        result.push("fizz");
      } else if (i % 5 === 0) {
        result.push("buzz");
      } else {
        result.push(i.toString());
      }
    }
    return result;
  }
  