/*
Write a function that takes a string as an argument and returns a new string with the characters in reverse order.
*/

//example 
console.log(reverseString('Hello World!')); // Output: !dlroW olleH



//solution
const reverseIt = (str) => [...str].reverse().join("")

// time complexity and space complexity will be O(n) 