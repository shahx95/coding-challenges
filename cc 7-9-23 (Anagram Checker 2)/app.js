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
    let hash1 = {}
    let hash2 = {}

    for(let character of str1){
        if(!(".?',-!;/ ").includes(character)){
            hash1[character] = (hash1[character] || 0) + 1
        } 
    }

    for(let character of str2){
        if(!(".?',-!;/ ").includes(character)){
            hash2[character] = (hash2[character] || 0) + 1
        } 
    }

    console.log(hash1,hash2)
    let keys = Object.keys(hash1)
    for(key of keys){
         if(! (hash1[key] === hash2[key])){
            return false
         }
    }

    return true
  }

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false