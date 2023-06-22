/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
The input will be a lowercase string with no spaces.
*/

/*
function takes a string as an input. the provided string will always be lowercase and have no spaces
function will return an array of strings
Example:
        capitalize("abcdef") => ['AbCdEf', 'aBcDeF']
Pseudocode                              : 
    split the string into an array of characters
    create variable to hold odd capitalized string and even capitalized string
    assign respective variable to map string array:
        loop through the characters and for the respective variable, only uppercase characters with respective variable (odd or even) index. 
        join the return
    return an array with odd and even variables as its elements    
*/

//solution
function capitalize(str){
    let even = [...str].map((character,index) => index%2 === 0 ? character.toUpperCase() : character).join('')
    let odd = [...str].map((character, index) => index%2 ? character.toUpperCase() : character).join('')
    return [even, odd]

}
 