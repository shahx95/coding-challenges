/*
Write a function called uniqueCharacters that takes in a string and returns a boolean indicating whether the string contains all unique characters. The function should return true if the string contains all unique characters, and false if it contains any repeated characters.

You may not use any additional data structures such as arrays, sets, or maps to solve this problem. You may only use variables to store temporary values.
*/

/*
examples:

uniqueCharacters('abcdefg') // should return true
uniqueCharacters('abcdeff') // should return false
uniqueCharacters('abcdefghijklmnopqrstuvwxyz') // should return true
uniqueCharacters('abcdefgihijklmnopqrstuvwxyzz') // should return false

*/

//time complexity of n^2 (for loop + indexOf). space complexity of 1 because function only keeps 1 character at most in the memory for each iteration
//solution
const uniqueCharacters = str => {
    for(let char of str){
        if(str.indexOf(char)!==str.lastIndexOf(char)){return false}
    }
    return true
}

//time complexity can be increased by using hash object
const uniqueCharacters2 = str => {
    const obj = {}
    for(let char of str){
        if(obj[char]){return false}
        obj[char]=true
    }
    return true
}