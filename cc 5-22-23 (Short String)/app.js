/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

/*

 function accepts a string of words only. challenge mentions no validation is needed.
 function returns an integer value
Examples: 
    findShort("bitcoin take over the world maybe who knows perhaps" => 3
    findShort("turns out random test cases are easier than writing out basic ones") => 3
    findShort("Let's travel abroad shall we") => 2
Pseudocode:
    split a string into an array of string words
    sort the array of words by length comparison
    return the length of the first element [0 index] in the sorted array
*/

//solution
function findShort(s){
    let splitArray = s.split(' ')
    let sortedArray = splitArray.sort( (a,b)=> a.length - b.length )
    return sortedArray[0].length
  }