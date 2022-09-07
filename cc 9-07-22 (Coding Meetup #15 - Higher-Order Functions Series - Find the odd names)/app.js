/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:
R:
E:
        var list1 = [
        { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
        { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
        ];
        returns 
        [
        { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
        ]
P:

        use filter on the list 
            for each firstName iterate through the characters and add their asci code to a holding variable
            if holding variable sum is odd return true else false
        return array returned by the filter method    
*/

//solution
function findOddNames(list) {
    return list.filter(obj => {
      let sum = 0
      for(let character of obj['firstName']){
        sum+=character.charCodeAt(0)
      }
      if(sum%2){
        return true
      }
      else return false
    }) 
    
  }