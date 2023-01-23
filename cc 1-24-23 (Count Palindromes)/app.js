/*
Given a string of words, write a function that will return the number of palindromic words in the string. A palindrome is a word that is spelled the same forwards and backwards.
*/

/*
The input string will only contain lowercase letters, spaces and punctuations.
The input string may have leading/trailing spaces.
The input string may have multiple spaces between words.
The input string may have leading/trailing punctuations.
The input string will be at most length 10^4.
The words in the input string will be at most length 100.
*/

/*
examples
countPalindromeWords("hello madam level racecar") => 3
countPalindromeWords("foo bar baz") => 0
countPalindromeWords("a man a plan a canal panama") => 5
*/

// time complexity of O(n), where n is the number of words in the input string.
// space complexity is O(n) as well, as we are storing the array of words as a variable.

//solution
const countPalindromeWords = str => {
    strToArr = str.split(" ")
    let count = 0
    for(let word of strToArr){
        if(word.trim() === [...word.trim()].reverse().join("")){
            count++
        }
    }
    return count
}
