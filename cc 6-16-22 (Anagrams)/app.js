/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/



/*
P: parameters R: return value E: examples P: pseudocode

P: function will accept two strings
R: function will return a boolean value
E:
    isAnagram("foefet", "toffee") => true
    isAnagram("Buckethead", "DeathCubeK") => true
    isAnagram("battery", "tartary") => false
P:
    we know that anagrams will have the same letters:
    split the letters into two respective arrays
    sort the arrays
    cannot do direct array comparison so join the two arrays
    compare the joined strings and return 
    

*/

//solution
var isAnagram = function(test, original) {
    return test.toLowerCase().split("").sort().join("")===original.toLowerCase().split("").sort().join("")
  };