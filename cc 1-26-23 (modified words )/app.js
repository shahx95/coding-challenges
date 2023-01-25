/*
 Create a function that takes in a sentence as a string, and returns the sentence with the first and last letters of each word capitalized.
*/

//input is a string
//output is a string

//examples
/*
Input: "hello world"
Output: "HeLlO WoRlD"

Input: "this is a test"
Output: "ThIs Is A TeSt"
*/


//solution
function firstLastCap(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        word = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
        words[i] = word;
    }
    return words.join(" ");
}

//with map
function firstLastCap(sentence) {
    sentenceArr = sentence.split(" ")
    return sentenceArr.map(word => ( word[0].toUpperCase() + word.slice(1,word.length-1) + word[word.length-1]
                      .toUpperCase()))
                      .join(" ")
}