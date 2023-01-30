/*
Create a function that takes in a string as an argument and returns an object containing the frequency of each word in the string.The function should be able to handle any type of string input, including strings with punctuation, multiple spaces, and uppercase letters. The returned object should have the words as keys and the frequency as values. 
*/

//example
/*
input:  "The quick brown fox jumps over the lazy dog." 
output:
{
The: 2,
quick: 1,
brown: 1,
fox: 1,
jumps: 1,
over: 1,
lazy: 1,
dog: 1
}
*/

//time complexity of O(n) where n is the number of words in the sentence
//space complexity of O(n) where n is the number of words in the sentence 

//solution
const freqencyCount = sentence => {
    const arrSentence = sentence.split(" ")
    let result = {}
    for(let word of arrSentence){
        result[word] = (result[word] || 0) + 1
    }
    return result
}