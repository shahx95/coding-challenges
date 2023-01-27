//Write a function that takes in a string and returns the number of vowels in it.

/*
Parameters:- string : a string of any length

Return value:- int : number of vowels in the string
*/

//examples

// countVowels("hello") => 2
// countVowels("aeiou") => 5
// countVowels("bcdfghjklmnpqrstvwxyz") => 0

//time complexity of O(n) where n is the length of the input string
//space complexity of O(1) because it uses only a constant amount of additional memory, regardless of the size of the input string.  
//solution
const countVowels = str => {
    let count = 0
    const vowels = "aeiouAEIOU"
    for(let char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
