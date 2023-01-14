/*
Write a function that takes in a string as an argument and returns a new string where all the characters are replaced by their ASCII values.
*/


//we get a string as input and reurn a string as output

//considerations: empty string? non valid string? how long can string be? if we expect very long strings, perhaps hashmaps can be a better solution?

//example
encode("Hello World!") // Output: "72 101 108 108 111 32 87 111 114 108 100 33"


//time and space complexity of O(n), where n is the length of the input string. 

//another way to solve it can be with array and join. more efficient than concat method
//solution
function encode(str) {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      encoded += str.charCodeAt(i) + " ";
    }
    return encoded.trim();
  }
  