/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
    abbreviate("elephant-rides are really fun!") => "e6t-r3s are r4y fun!"
P:

    create an empty array called arr
    split the input string by space to create an array of words
    iterate through this array of words
        for each word, check if it is >= 4 in length. if not, push the word to the array arr
        if word is >= 4,
            check if it contains a hyphen
                split the word by hyphen 
                then convert each splitted word to its abbreviation by using index and slice
                join the abbreviated words by hyphen and push to arr

            otherwise
                check if word contains comma
                    if it contains comma, create abbreviation with index and slice and then add comma to the end
                    push to arr

                otherwise use index and slice to create abbreviation and push to arr
    return arr after joining by space            


*/
//solution

function abbreviate(string) {
  
    let arr = []
    string.split(" ").forEach(word => {
      if(word.length>=4){
        if(word.includes("-")){
        let hyphenatedArr = []
        
        word.split("-").forEach(hyphenatedWord => {
          let abb = null
          if(hyphenatedWord[hyphenatedWord.length-1]===","){
             abb = `${hyphenatedWord[0] + hyphenatedWord.slice(1,hyphenatedWord.length-2).length + hyphenatedWord.slice(hyphenatedWord.length-2)}`
          }
          else{
             abb = `${hyphenatedWord[0] + hyphenatedWord.slice(1,hyphenatedWord.length-1).length + hyphenatedWord[hyphenatedWord.length-1]}`
          }
          hyphenatedArr.push(abb)
        })
        
        arr.push(hyphenatedArr.join("-"))
      }
      else{
        let abb = null
        if(word[word.length-1]===","){
             abb = `${word[0] + word.slice(1,word.length-2).length + word.slice(word.length-2)}`
          }
          else{
             abb = `${word[0] + word.slice(1,word.length-1).length + word[word.length-1]}`
          }
        arr.push(abb)
      }
      }
      else{
        arr.push(word)
      }
    })
     
    return arr.join(" ")
  }