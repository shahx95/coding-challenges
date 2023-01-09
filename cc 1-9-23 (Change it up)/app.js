/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
*/

/*
example

the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// overall time complexity of the function is O(n) where n is the length of the input string. space complexity is also O(n)

//solution
function changer(str) {
    const vowels = "aeiou"
    const lowerStr = str.toLowerCase()
    let result = ""
    for(let char of lowerStr){
    
      //alphabet
      if(char.charCodeAt() >= 'a'.charCodeAt() && char.charCodeAt() <= 'z'.charCodeAt()){
        const nextLetterCode = (char.charCodeAt() - 97 + 1) % 26 + 97
        const nextLetter = String.fromCharCode(nextLetterCode)
        //vowel
        if(vowels.includes(nextLetter)){
         
          result = result.concat(nextLetter.toUpperCase())
        }
        //consonent
        else{
          result = result.concat(nextLetter.toLowerCase())
        }
      }
      //not alphabet
      else result = result.concat(char)
    }
    return result 
  }