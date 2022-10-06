/*
Complete the function caffeineBuzz, which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  integer
R:  string
E:
        caffeineBuzz(1)   => "mocha_missing!"
        caffeineBuzz(3)   => "Java"
        caffeineBuzz(6)   => "JavaScript"
        caffeineBuzz(12)  => "CoffeeScript"
P:  
    create a holding variable called result initialised with an empty string
    check for divisiblity by 3 & 4, followed by 3 and add the respective string Coffee or Java to result variable
    else add mocha_missing! string to result variable

    before returning check if argument integer is even and if it is add Script to result string, other wise just return result
*/


//solution
function caffeineBuzz(n){
    let result = ""
    if(n%3 === 0 && n%4===0){
      result = "Coffee"
    }
    else if(n%3 === 0){
      result = "Java"
    }
    else result = "mocha_missing!"
    
    return result != "mocha_missing!" && n%2 === 0 ? result.concat("Script") : result
  }