/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  strings
R:  integer
E:
        'a' and 'g' returns 1

        'A' and 'C' returns 1

        'b' and 'G' returns 0

        'B' and 'g' returns 0

        '0' and '?' returns -1
P:
    Create a isLetter function to check if a character is a letter in Alphabet

    for sameCase function:
        check if both arguments are letters using isLetter function
        if any arugment is not a letter, return -1

        otherwise compare if both characters are of same case using toLowerCase/toUpperCase comparisons 
            return 1 if true and 0 if false
*/

//solution
function isLetter(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(alphabet.includes(letter)){return true}
    else{return false}
    }
function sameCase(a, b){
    if(!(isLetter(a) && isLetter(b))){return -1}

    let result = a.toLowerCase() === a && b.toLowerCase() === b || a.toUpperCase() === a && b.toUpperCase() === b
    return result?1:0 
    }