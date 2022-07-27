/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: an array of strings of integers
R: a string
E:
    switcher(['24', '12', '23', '22', '4', '26', '9', '8']) => "codewars"
P:
    apply map on the input array
    for element between 1 and 26 
        get absolute value of subtraction with 27. this is the original alphabet order 
        and then add 96 to get the unicode value
        use fromCharCode to get the character and return it
    otherwise if element is 27,28 or 29, return ! ? or " " respectively
    otherwise element is not valid
    after map returns an array join it and return it    

*/

//solution
function switcher(x){
   
    return x.map(element => {
                            if(element<=26){
                              return String.fromCharCode(Math.abs(27-element)+96)
                            }
                            else if(element === '27'){return '!'}
                            else if(element === '28'){return '?'}
                            else if(element === '29'){return ' '}
                            else{
                              return undefined //for any invalid input
                            }
                          }).join("")
    
  }