// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

//simple way
function solution(value){
    return "Value is " + ("00000" + value).slice(-5)
  }

//using javascript built in function
function solution2(value){
    const paddedString = String(value).padStart(5, '0');
    return `Value is ${paddedString}`
}  