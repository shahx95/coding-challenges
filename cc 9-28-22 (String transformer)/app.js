/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
You may assume the input only contain English alphabet and spaces.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  string
E:
    "Example Input" ==> "iNPUT eXAMPLE"
P:  
    split argument string into array of characters
    apply map on the array
        for each character, if it is in lowerCase convert to upperCase or viceversa
    join the mapped character array
    split them by space this time and reverse the array
    join the reversed array by space and return the resultant string
*/


//solution
function stringTransformer(str) {
    return [...str].map(character => character===character.toLowerCase()?character.toUpperCase():character.toLowerCase())
                   .join("")
                   .split(" ")
                   .reverse() 
                   .join(" ")
                   
  }