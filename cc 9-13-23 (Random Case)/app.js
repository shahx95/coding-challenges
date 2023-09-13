/*
Write a JavaScript function that takes a sentence as input and randomly changes the case of each letter in the sentence. The function should return the modified sentence with letters randomly converted to uppercase or lowercase.

For example, if the input sentence is "Hello, World!", the function might return "hElLo, wOrLd!" or "HEllO, WOrLD!" or any other random variation of the letter casing.

Your task is to implement the randomCase(sentence) function.
*/

function randomCase(sentence) {
    // Your code here
    let resultStr = ""
    for(let letter of sentence){
        if(Math.random() >= 0.5){
            resultStr += letter.toLowerCase()
        } else {
            resultStr += letter.toUpperCase()
        }
    }
    
    return resultStr
}

//Time Complexity: O(n)
//Space Complexity: O(n)

// Test the function
const inputSentence = "Hello, World!";
const outputSentence = randomCase(inputSentence);
console.log(outputSentence);

