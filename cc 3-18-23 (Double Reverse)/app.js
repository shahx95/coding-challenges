/*
Write a function called reverseWords that takes in a string as input and returns a new string where the order of the words is reversed, but the letters within each word are also reversed.
*/

// Function will take a string containing one or more words separated by spaces.
// Function will return a new string where the order of the words is reversed, and the letters within each word are also reversed.


//examples
reverseWords('hello world'); // 'dlrow olleh'
reverseWords('a man a plan a canal panama'); // 'amanalp lanac a nalp a nam a'
reverseWords('javascript is awesome'); // 'emosewa si tpircsavaj'

// Space Complexity: O(N), where N is the length of the input string. 
// Time Complexity: O(N*M), where N is the number of words in the input string and M is the length of the longest word in the input string. 

//solution
function reverseWords(str) {
    // Split the input string into an array of words.
    const wordsArr = str.split(' ');
    // Reverse the order of the array of words.
    const reversedWordsArr = wordsArr.reverse();
    // For each word in the reversed array, reverse the letters within the word.
    const reversedStrArr = reversedWordsArr.map(word => word.split('').reverse().join(''));
    // Join the array of words back into a string with spaces as separators.
    const reversedStr = reversedStrArr.join(' ');
    // Return the new string.
    return reversedStr;
  }
  