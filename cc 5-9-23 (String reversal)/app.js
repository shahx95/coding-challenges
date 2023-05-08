/*
Write a function reverseWords(str) that takes in a string str and returns a new string with the words reversed. The order of the words in the input string should be maintained. For example, reverseWords("Hello World") should return "olleH dlroW".

Note: A word is defined as any sequence of non-space characters.
*/


// The function uses a for loop to iterate over each character of the input string 
//  then concatenates each character to the beginning of the reversedString variable 
//  this effectively reverses the order of the characters in the input string
function reverseWords(str){
    let reversedString = ""
    for(let letter of str){
    reversedString = letter + reversedString
    }
    return reversedString
    }
    
// function has time complexity of O(n) depending on the size of input string
// space complexity of O(n) as well again dependent on the size of the input string 

console.log(reverseWords("Hello World")); // Output: "olleH dlroW"