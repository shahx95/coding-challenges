/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function accepts a string only. any other input type should give an input error?
R: function returns a boolean value
E: 
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
P:
    convert string input to lower case 
    check if string includes x and o
    or check if string is empty. in case of empty will have same amount of x and o
    count x and o by splitting by respective characters and counting the splits
    
    else if checks fail return false
*/

//solution
function XO(str) {
    str = str.toLowerCase() //ooxXm => ooxxm
    let includesXO = (str.includes("x") && str.includes("o"))||str.length===0
    if(includesXO){
      return (str.split('x').length-1)===(str.split('o').length-1)
    }
    else return false
  }

// may refactor later with a cleaner solution  