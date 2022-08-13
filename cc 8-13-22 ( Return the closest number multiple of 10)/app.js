/*
Given a number return the closest number to it that is divisible by 10.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer
R: integer
E: 
        closestMultiple(22) => 20
        closestMultiple(25) => 30
        closestMultiple(37) => 40
P:
    divide the number by 10 and round it
    multiply the rounded number by 10
    return the number 
*/

//solution
const closestMultiple10 = num => {
    return Math.round(num/10)*10;
  };