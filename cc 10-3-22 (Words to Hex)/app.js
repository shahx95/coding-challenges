/*
Gary likes pictures but he also likes words and reading. He has had a desire for a long time to see what words and books would look like if they could be seen as images.

For this task you are required to take a continuous string that can consist of any combination of words or characters and then convert the words that make up this string into hexadecimal values that could then be read as colour values.

A word is defined as a sequence of ASCII characters between two white space characters or the first or last word of a sequence of words.

Each word will represent a hexadecimal value by taking the first three letters of each word and find the ASCII character code for each character. This will then give you one hexadecimal value that represents the colours red, green or blue. You will then combine these values into one readable RGB hexadecimal value, e.g. #ffffff.

If your word consists of less than 3 letters, you should use the hexidecimal value 00, ie "It" would return a value #497400.

Your answer should be an array of hexadecimal values that correspond to each word that made up your original string.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  array
E:
    "Hello, my name is Gary and I like cheese." =>
    ['#48656c', '#6d7900', '#6e616d','#697300','#476172','#616e64','#490000','#6c696b','#636865']
P:
    split argument string into individual words
    apply map on the split array of words
        for each word if it is less than 3 in length
             first find its asci code and then convert it to hex using toString(16)
             concat "00" at the end of the string repeating it 3 - word.length times
        if word is 3 or more in length
            find the asci code for the first 3 letters and convert it to hex
        return the converted words
    return the array returned by map               
*/

//solution

function wordsToHex(words) {
   
    return words.split(" ").map(word => {
      let converted = "#"
      for(let i=0;i<3;i++){
        if(word[i]){
          converted += word[i].charCodeAt(0).toString(16)
        }
        else{
          converted += "00"
        }
      }
      return converted
    })
  }

// function wordsToHex(words) {
//     return words.split(" ").map(word => {
//       let converted = "#"
//       if(word.length<3){
//         for(let letter of word){
//           converted += letter.charCodeAt(0).toString(16)
//         }
//         converted += "00".repeat((3-word.length))
//       }
//       else{
//         converted += word[0].charCodeAt(0).toString(16) + word[1].charCodeAt(0).toString(16) + word[2].charCodeAt(0).toString(16)
//       }
//       return converted
//     })
//   }