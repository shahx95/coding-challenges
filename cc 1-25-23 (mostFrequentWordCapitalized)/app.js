/*
Create a function that takes in a sentence and returns the sentence with the most frequent word capitalized.
*/

// takes a sentence (string): a sentence containing one or more words
// returns a string: the input sentence with the most frequent word capitalized
// what if there are multiple words with same frequency? capitalize them all or capitalize the first the word which occurs first?

//examples
console.log(mostFrequentWordCapitalized("The quick brown fox jumps over the lazy dog"), 'THE quick brown fox jumps over THE lazy dog')
console.log(mostFrequentWordCapitalized("Hello World, How are you"), 'HELLO WORLD, HOW ARE YOU')


//time complexity of O(n) depending on the size of the number of words in the sentence
//space complexity of O(n) because we are storing the words in an array and an object to store the frequency of each word, which takes up O(n) space in the worst case.  

//solution

function mostFrequentWordCapitalized(sentence){
    splitToWords = sentence.split(" ")
    let obj = {}, maxFreq = 0
    for(let word of splitToWords){
        word = word.toLowerCase()
        obj[word] = (obj[word] || 0) + 1
        if(obj[word] > maxFreq){
            maxFreq = obj[word]
        }
    }

    return splitToWords.map(word => {
        if(obj[word.toLowerCase()] === maxFreq){
            return word.toUpperCase()
        }
        else return word
    }).join(" ")

}