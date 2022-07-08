/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
*/


/*
P: parameters R: return value E: Examples P: pseudocode

P: integer. positive. between 1 and 50.
R:  string
E:
    generateShape(3) => "+++\n+++\n+++"
P: 
    we need to repeat + integer times horizontally and vertically
    horizontally, we can use the string repeat method
    vertically we can use a for loop
        for each iteration add a newline to the string unless it is the last iteration
    return the string    
*/

//solution
function generateShape(integer){
    let str = "+".repeat(integer)
    let square = ""
    for(let i=1;i<=integer;i++){
      if(i!=integer){
        square = square + str + "\n"
      }
      else{
        square = square + str
      }
    }
    return square
  }

//refactoring
function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }  