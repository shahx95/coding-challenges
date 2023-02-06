/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

/* 

function takes a positive integer as an input. no other input type will be accepted.
return an integer value 
Examples: 
    nearestSq(10) => 9
    nearestSq(111) => 121
    nearestSq(9999) => 10000
Pseudocode: 
    function takes an integer as an input
    take the square root of the input number and round the result to the nearest integer
    square the resultant rounded integer and return it
*/

//solution
function closestSquare(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2)
  }
