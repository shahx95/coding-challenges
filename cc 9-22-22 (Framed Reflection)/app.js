/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:
*********\n* olleH *\n* dlroW *\n*********

Words in your solution should be left-aligned.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E: mirror('Codewars') => '************\n* srawedoC *\n************'
P: 
    
*/

//solution
function mirror(text){
    let wordArr = text.split(" ")
    let longestWordLength = wordArr.reduce((total,current) => {
  if(current.length>total){total = current.length; }
  return total    
      
  }, 0)
    let borderNorth = '*' + '*'.repeat(longestWordLength + 2) +'*\n'
    let borderSouth = '*' + '*'.repeat(longestWordLength + 2) +'*'
    let str = ""
    
    wordArr.forEach(word => {
      str+= "* " + word.split("").reverse().join("") + " ".repeat(longestWordLength - word.length) +" *\n"
    })
    console.log(borderNorth + str + borderSouth )
    return borderNorth + str + borderSouth 
  }