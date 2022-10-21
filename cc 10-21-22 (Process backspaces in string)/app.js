/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  string
E:
    "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""
P:
    create an emty array variable
    iterate over the string
    for each character if the character is not equal to #, push it in the array variable
    if its equal to #, pop the array variable
    after iteration, the characters remaining in the array variable can be returned as string using join method
*/
//solution

function cleanString(s) {
    let arr = []
    for(let character of s){
      if(character !== "#"){
        arr.push(character)
      }
      else{
        arr.pop()
      }
    }
    
    return arr.join("")
  }