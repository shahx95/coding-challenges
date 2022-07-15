/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string of alphabet characters
R: string
E: 
    Hello World -> hELLO wORLD
P:
    convert the string to an array
    iterate through the characters using map
        check if character is lowercase. if it is, convert it to uppercase
        else convert it to lowercase
    join the array returned by map and return it    
*/

//solution
function alternateCase(s) {
    return [...s].map( (element) => {
      if(element === element.toLowerCase()) {return element.toUpperCase()}
      else return element.toLowerCase()
    }).join("")
    
  }