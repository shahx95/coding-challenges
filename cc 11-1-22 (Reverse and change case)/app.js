/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: input will always be a string. there will always be a space betweeen two words. 
R: string
E: 'eXample TeXt' => 'tExT ExAMPLE'
P:
   reverse the string by splitting it into an array and using reverse method. join to get the string back. 
   then reverse the cases by spliting the string and iterating through the letters using map
        for each letter, check and replace with the opposite case
   join the array returned by map
   use trim to remove leading/trailing spaces 
   return      
*/

//solution
const transformString = str => str.split(" ").reverse().join(" ") //reversing 
                                  .split("").map(letter => letter===letter.toLowerCase()? letter.toUpperCase(): letter.toLowerCase()).join("").trim() //changing case