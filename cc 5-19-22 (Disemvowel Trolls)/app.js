/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a string only. no other input type is expected
R: return a string value 
E:
    disemvowel("abracadabra") => 'brcdbr'
    disemvowel("aloha") => 'lh'
    disemvowel("rhythm") => 'rhythm'
P:
    validate the input type
    split the input string into an array
    use filter on the split array to create a new array of elements that are consonants 
    join the filtered array into a string
    return the filtered array string    
*/

//solution

function disemvowel(str) {
    let strToArray = str.split('')
    let filteredArray = strToArray.filter( element => "aeiouAEIOU".includes(element)=== false )
    let arrayToStr = filteredArray.join('')
    str = arrayToStr
    return str;
  }

// single line for when you feel fancy:   
//      return str.split('').filter( element => "aeiouAEIOU".includes(element)=== false ).join('')