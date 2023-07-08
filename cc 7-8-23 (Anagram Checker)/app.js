/*
Write a JavaScript function that takes two strings as input and determines if they are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Rules:
The function should return true if the two strings are anagrams, and false otherwise.
Ignore spaces and punctuation marks while checking for anagrams.
The comparison should be case-insensitive.
*/

// Example:
// Input: "listen", "silent"
// Output: true (since "listen" and "silent" are anagrams)

//solution
function isAnagram(str1, str2) {
    // Remove spaces and punctuation marks
    str1 = removeSpacesAndPunctuation(str1); //trying regex. but can also use conditional to ignore space and punctuations when counting occurences
    str2 = removeSpacesAndPunctuation(str2);
    
    // Check if the lengths of the strings are equal
    if (str1.length !== str2.length) {
      return false;
    }

    // Convert strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
  
    // Count the occurrences of each character in str1
    const charCount = {};
  
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Compare the character counts in str2
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
  
      // If the character doesn't exist in charCount or its count is zero, it's not an anagram
      if (!charCount[char]) {
        return false;
      }
  
      // Decrement the count of the character
      charCount[char]--;
    }
  
    return true;
  }

  function removeSpacesAndPunctuation(str) {
    return str.replace(/[\s\W]/g, '');
  }

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false