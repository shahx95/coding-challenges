/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: both arguments will be strings. strings can be empty. 
R: string
E:
        text before = "abc"
        character   = "z"
        text after  = "zzz"
P:
    check if text and char are valid 
        use repeat method to repeat char text.length times
    otherwise return ""

*/


//solution
function contamination(text, char){
    if(text && char){
      return char.repeat(text.length)
    }
    else return ""
  }