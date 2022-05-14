/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a number as an input for a and b. it takes +, -, /, * as input for sign. no other input type will be accepted.
R: return a number  
E: 
    (1,2,"+") => 3
    (1,2,"-") => -1
    (3,5,"*") => 15
P: 
    setup a function calculator with three paramters for the respective inputs
    create a conditional to validate the inputs. return invalid if inputs are not numbers
    create a switch statement for signs. if sign not found/invalid, default will return invalid
    create the math expressions based on the switch cases and return 
    
*/

function calculator(a,b,sign){
    if(typeof(a)==='number' && typeof(b)==='number'){
      switch(sign){
        case '+':
          return a+b
        case '-':
          return a-b
        case '/':
          return a/b
        case '*':
          return a*b
        default:
          return "unknown value"
    }
    }
    else{
      return 'unknown value'
    }
  
  }