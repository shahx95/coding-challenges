/*
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.
Given a number, Find if it is Balanced or not .
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. positive.
R: string
E:
    (balanced-num 7) ==> return "Balanced"
    (balanced-num 295591) ==> return "Not Balanced"
    (balanced-num 959) ==> return "Balanced"
    (balanced-num 27102983) ==> return "Not Balanced"
P:
    convert the integer into a string
    split the string into an array
    check if length is odd or even
        if odd, slice before the center and after the center
            use reduce on both slices
            compare the reduce results and return "balanced" if same
        if even, slice before the center and after the center + 1
            use reduce on both slices
            compare the reduce results and return "balanced" if same
    return not balanced otherwise        
*/
//solution

function balancedNum(number)
{
    let arr = [...String(number)]
    
    if(arr.length%2){
      //odd
      let center = Math.ceil(arr.length/2)-1
      let arrLeft = arr.slice(0,center).reduce( (total, currentVal) => total+ +currentVal, 0 )
      let arrRight = arr.slice(center+1).reduce( (total, currentVal) => total+ +currentVal, 0 )
      if(arrLeft === arrRight){
        return "Balanced"
      }
    }
    else{
      //even
      [1,2,3,4,5,6]
      
      let center = Math.ceil(arr.length/2)-1
      let arrLeft = arr.slice(0,center).reduce( (total, currentVal) => total+ +currentVal, 0 )
      let arrRight = arr.slice(center+2).reduce( (total, currentVal) => total+ +currentVal, 0 )
      if(arrLeft === arrRight){
        return "Balanced"
      }
    }
  
    return "Not Balanced"
}


//refactoring
function balancedNum(number)
{
    let str = String(number)
    let balance = (str.length - (str.length%2? -1: -2))/2
    let add = digits => [...digits].reduce( (total, currentVal) => total+ +currentVal, 0 )
    
    if(add(str.slice(0,balance))===add(str.slice(-balance))){
      return "Balanced"
    }
    else{
      return "Not Balanced"
    }
}