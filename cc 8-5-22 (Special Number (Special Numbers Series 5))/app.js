/*
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .

Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.

*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. >0.
R: string
E:
        specialNumber(2) ==> return "Special!!"
        specialNumber(9) ==> return "NOT!!"
        specialNumber(23) ==> return "Special!!"
        specialNumber(39) ==> return "NOT!!"
P:
    create a special number string
    create a status variable and set it as 'Special!'
    convert the input into string
    iterate through the input string
        if any character is not a special number
            reassign status as 'Not!!'
    return status        
*/

//solution

function specialNumber(n){
    let inputNum = String(n)
    let special = "012345"
    let status = 'Special!!'
    for(let digit of inputNum){
      if( ! special.includes(digit) ){
        return status = 'NOT!!'
      }
    }
    return status
  }