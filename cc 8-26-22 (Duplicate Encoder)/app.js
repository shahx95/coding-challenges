/*

*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E: 
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
P:
    convert the word to lowercase
    spread the word into individual characters and put them in an array
    apply map on this array of characters
    check if first and last index of the character is same (means only one character)
        if same return "(" otherwise return ")"
    join the array returned by map and return it as the answer
*/
//solution
function duplicateEncode(word){
    
    let str = word.toLowerCase()
    
    return [...str]
            .map(character => str.indexOf(character)===str.lastIndexOf(character)?"(":")")
            .join("")
  }
  