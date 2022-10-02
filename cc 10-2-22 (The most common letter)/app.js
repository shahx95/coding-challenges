/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  string
E:
        ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
        ('real talk bro', 'n') => 'neal talk bno'
        ('great job go ahead', 'k') => 'grekt job go khekd'
P:
    make a copy of the input string
    use reduce to count the frequency of characters  
    get the character with the highest frequency use Math.max 
    use map to create a new string by replacing the max frequency character with the letter provided in argument
    join mapped array and return
*/


//solution
function replaceCommon(inputString, letter) {
    const string = inputString.slice()
    let dictionary = [...string].reduce((total,current) => {
      if(current != " "){total[current] = (total[current] || 0) + 1}
      
      return total
    }, {})
    
    let max = Math.max(...Object.values(dictionary))
    // console.log(dictionary)
    const replacement = Object.keys(dictionary).find(element => dictionary[element]===max)
    
    const result = [...string].map(character => {
      if(character === replacement){return letter}
      else return character
    }).join("")
    
    // console.log(result)
    return result
    
  }