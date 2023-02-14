/*
Write a function called getUniqueWords that takes in a string as its argument and returns an array of unique words in the string. The returned words should be in alphabetical order and all lowercase.
The function should be case-insensitive, so that "The" and "the" are treated as the same word.
The function should remove any punctuation from the input string. Only letters, spaces, and numbers should be considered.
The returned array should not include any duplicates.
The returned array should be in alphabetical order.
You can assume that the input string will not be empty.
*/

//example
// getUniqueWords("The quick brown fox jumps over the lazy dog") => ["brown", "dog", "fox", "jumps", "lazy", "over", "quick", "the"]

//solution
const getUniqueWords = str => {
    let lowerStr = str.toLowerCase().split(" ")
    lowerStr = lowerStr.filter((word,index) => lowerStr.indexOf(word)===index)
    lowerStr.sort((a,b) => a.localeCompare(b))
    return lowerStr

}