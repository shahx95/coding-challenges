/*
Given a string str, reverse it omitting all non-alphabetic characters.
A string consists of lowercase latin letters, digits and symbols.
*/

/*
Function accepts a string. no other input type is accepted
Function returns a string
Examples:
        reverseLetter("krishan") => "nahsirk"
        reverseLetter("ultr53o?n") => "nortlu"
Pseudocode:  
    we only have to consider lowercase alphabets so make use of the ascii code for them
    ascii code range for a-z is 97-122
    create an array variable
    loop through the string characters and only push character with asci code between 97-122 to the array
    reverse the array and join 
    return the joined string 
*/


//solution
function reverseLetter(str) {
    //coding and coding..
    //ascii code for alphabets 97-122
    if(typeof(str)!=="string"){
        return "Invalid Input"
    }
    let arr = []
    for(let i=0;i<str.length;i++){
      if( (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) ){
        arr.push(str[i])
      } 
    }
    return arr.reverse().join("")
  }