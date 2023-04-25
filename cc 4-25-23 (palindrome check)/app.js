/*
Write a function called "isPalindrome" that takes a string as input and returns true if the input string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
*/

//a string of characters in any case, can be numbers, can be punctuation, can be spaces
//we need to only care about alphabets
//return a boolean value

//examples
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true

//bruteforce way
// str = str.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
// return str === [...str].reverse().join("")

//two pointer method
function isPalindrome(str){
    //The ASCII range for lowercase letters 'a' to 'z' is 97 to 122, and the ASCII range for uppercase letters 'A' to 'Z' is 65 to 90.
    let left = 0
    let right = str.length-1
    strLower = str.toLowerCase() 
    while(left <= right){
        if( ! (strLower[left].charCodeAt(0) >= 97 && strLower[left].charCodeAt(0) <= 122)){
            left++
            continue
        }
        if( ! (strLower[right].charCodeAt(0) >= 97 && strLower[right].charCodeAt(0) <= 122)){
            right--
            continue
        }
        if(strLower[left] !== strLower[right]){
            return false
        }
        left++
        right++
        
    }
    return true
}

//comment
//The time complexity of the updated isPalindrome() function is O(n), where n is the length of the input string.
//The space complexity of the function is O(1), as it uses a constant amount of additional space for the two pointers (left and right) and the lowercase version of the input string (strLower). 