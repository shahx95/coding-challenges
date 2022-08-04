/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string. only alphabets. all lowercase. 
R: integer
E:
    solve("codewarriors")=>2
    solve("suoidea")=>3
    solve("ultrarevolutionariees")=>3
P:
    convert string to an array
    iterate through the array
        run a counter and add 1 on each consecutive vowel
        create a variable to hold the longest count and compare it with the counter. if counter is larger, set the variable equal to counter 
        if vowel is not found reset the counter to 0
    return the longest count    

*/

//solution
function solve(s){
    let longest = 0
    let currentLongest = 0
    let vowels = "aeiou"
    
    s.split("").forEach( character => {
      if(vowels.includes(character)){
        longest++
        currentLongest < longest? currentLongest=longest : currentLongest
        return
      }
      else{
        longest = 0
        return
      }
    } )
    
    return currentLongest
   }