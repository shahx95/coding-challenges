// Create a function in JavaScript that takes in a string as an input and returns the most common letter in that string. The function should be case-insensitive and should ignore spaces. If there is a tie for the most common letter, return the letter that appears first in the alphabet.
// You should be able to handle any string input, including one that contains special characters, numbers, and punctuation.

/*
Example:

Input: "Hello World"
Output: "l"

Input: "JavaScript is Cool"
Output: "c"
*/

//time & space complexity O(n)

//solution

const mostCommon = str => {
    //convert to lowercase to make string case insensitive
    lowerStr = str.toLowerCase()
    // Create an object to store the count of each letter
    const obj = {}
    // Iterate through each character in the string
    for(let letter of lowerStr){
        // If the character is not a space, add it to the letterCount object or increment its count
        if(letter){
            obj[letter] = (obj[letter] || 0) + 1
        }
    }

    //Use max function to get max value
    let max = Math.max(...Object.values(obj))
    for(let letter in obj){
        if(obj[letter]===max){
            return letter
        }
    }

}