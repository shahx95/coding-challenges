/*
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Given a number, Find if it is Disarium or not .
Number passed is always Positive .
Return the result as String
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: integer. positive.
R: string.
E:
        disariumNumber(89) ==> return "Disarium !!"
        disariumNumber(564) ==> return "Not !!"
P:
    convert the number to string
    create an iteration from 1 to string.length
        use the bracket notation to access each digit
        convert the digit to number
        raise it to the power of i
        add the result to sum
    return sum     
*/

//solution
function disariumNumber(n){
    let numToString = String(n)
    let sum = 0
    for(let i=1;i<=numToString.length;i++){
      sum = sum + (+numToString[i-1])**i 
    }
    if(sum===n){
      return 'Disarium !!'
    }
    else return 'Not !!'
  }