/*
Given a phrase, capitalize every word.
*/


//input will always be a string. input can be empty string

//return a string

/*
 split the input string into an array of words
 loop through this array and capitalize the first characters
 before joining the words back together again
*/


//linear time complexity because every character is visited at least once 
//linear space complexity because a temporary variable is kept which grows proportionally to the input string.

//solution
const capitalize = phrase => {
    const words = [];
  
    for (let word of phrase.split(" "))
      words.push(word[0].toUpperCase() + word.slice(1));
  
    return words.join(" ");
  };