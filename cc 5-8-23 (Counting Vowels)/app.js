/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// function expects a string of letters and spaces.  returns an integer
// examples
countVowels("hello world") // Output: 3
countVowels("this is a test") // Output: 4
countVowels("I am learning JavaScript") // Output: 8


function countVowels(str){
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
      }
    let count = 0
    for(let letter of str){ //time complexity of O(n) dependent on length of string
        if(vowels[letter]){
            count++ //space complexity of O(1) since vowels and count are taking constant space
        }
    }
    return count      
}