/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

Use this LeetSpeak dialect: 
{ A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', Y : 'Y', Z : '2' }

*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string. only uppercase letters and spaces. 
R: string.
E:
    toLeetSpeak("LEET") returns "1337"
P:
    convert the string into an array
    apply map method on the string
        for each element check if it exists as a key in the leetDict
            if it does, then return the value for the corresponding key
            otherwise return the same element
    after map returns an array join it and return a string        
*/

//solution
function toLeetSpeak(str) {
    let leetDict = { A : '@', B : '8', C : '(', D : 'D', E : '3', F : 'F', G : '6', H : '#', I : '!', J : 'J', K : 'K', L : '1', M : 'M', N : 'N', O : '0', P : 'P', Q : 'Q', R : 'R', S : '$', T : '7', U : 'U', V : 'V', W : 'W', X : 'X', Y : 'Y', Z : '2' }
    
    return [...str].map(element => leetDict[element]?leetDict[element]:element).join("")
  }