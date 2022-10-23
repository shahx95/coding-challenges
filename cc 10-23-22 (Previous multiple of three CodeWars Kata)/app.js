/*
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: integer
R: integer or null
E:
        1      => null
        25     => null
        36     => 36
        1244   => 12
        952406 => 9
P:
    split the number into an array of strings
    create a for loop until i is equal to the array length
        within the for loop create another for loop 
        if it is divisible by 3, it will return 3, 
        otherwise it will continue the loop but with the array without the last element, using arr.pop()
*/

//solution

const prevMultOfThree = n => {
    let arr = n.toString().split('')
  
    for(let i = 0; i<arr.length; i++){
      for(let j = 0; j<arr.length; i++){
        let sum = +arr.join('')
        if( sum % 3 === 0) return sum 
        arr.pop()
      }
  
      return null
    }
  
  }
  