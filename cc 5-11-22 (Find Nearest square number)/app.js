/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

/* 
P: parameters R: return value E: examples P: pseudocode

P: function takes a positive integer as an input. no other input type will be accepted.
R: return an integer value 
E: 
    nearestSq(10) => 9
    nearestSq(111) => 121
    nearestSq(9999) => 10000
P: 
    function takes an integer as an input
    take the square root of the input number and round the result to the nearest integer
    square the resultant rounded integer and return it
*/

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}