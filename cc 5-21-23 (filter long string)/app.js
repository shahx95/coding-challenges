/*
Write a function that takes an array of strings as input and returns a new array with only the strings that have more than 5 characters.
*/


//solution
function filterLongStrings(arr) {
    return arr.filter(str => str.length > 5);
  }
  
  const strings = ["apple", "banana", "grape", "orange", "watermelon"];
  console.log(filterLongStrings(strings)); // Output: ["banana", "watermelon"]
  