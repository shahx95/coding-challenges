/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string.  can have letters or numbers. can have special characters. 
R: string.
E:
        "din"      =>  "((("
        "recede"   =>  "()()()"
        "Success"  =>  ")())())"
        "(( @"     =>  "))((" 

P:  
    convert to lowercase and create an array
    map through array checking if indexof == lastindexof and return the appropriate character

*/

//solution
const replaceWithBrackets = word => [...word.toLowerCase()].map(letter => word.indexOf(letter)===word.lastIndexOf(letter)?"(":")").join("")