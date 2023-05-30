/*
Write a function called reverseString that takes a string as input and returns the reversed version of that string. The reversed string should have the characters in opposite order.
*/

//Example:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("12345")); // Output: "54321"

//solution:
function reverseString(str) {
    let reversed = "";
    for (let character of str) {
      reversed = character + reversed;
    }
    return reversed;
  }

  //other way: split, reverse, and join