/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
        "camelCasing"  =>  "camel Casing"
        "identifier"   =>  "identifier"
        ""             =>  ""
P:
    split the input string into an array of characters
    iterate over each character using the map method 
        during iteration check if character is uppercase
            if it is uppercase return a " " before the character
            it it is not uppercase return the character
    join the array returned by map method and return the string        
*/

//solution

function solution(string) {
    //split the string into an array of characters
    let stringToArray =  string.split("")
    
    //iterating over each character and checking if character is uppercase. 
    //if a character is uppercase, add a space before it.
    //since we are using map method, we are returned a new array
    let breakingCase = stringToArray.map( character => {
       if(character === character.toUpperCase()){
         return " "+character
       }
       return character
     } )
    
    //joining the new array created after map method to form a string
    let arrayToString = breakingCase.join("")
    
    return arrayToString
   }
   