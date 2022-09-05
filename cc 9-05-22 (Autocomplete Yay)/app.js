/*
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string and array
R: array
E:
    autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
P:
    filter the input to only keep the letters

    apply forEach on the dictionary and for each iteration
        check if word starts with the treated input using startsWith string method
        if it does, push it to a holding array as long as it has less than 6 elements
    
    return the holding array
*/

//solution
function autocomplete(input, dictionary){
    let matches = []
    let inputTreated = input.toLowerCase().match(/[a-z]/g).join("")
    dictionary.forEach(word => {
      let condition = word.toLowerCase().startsWith(inputTreated)
      if(condition && matches.length<5){
        matches.push(word)
      }
    })
    
    return matches
  }