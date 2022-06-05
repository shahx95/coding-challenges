/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

/*
PREP

P   function accepts an array of 1s and 0s
R   function returns an integer
E:
        Testing: [0, 0, 0, 1] ==> 1
        Testing: [0, 0, 1, 0] ==> 2
        Testing: [0, 1, 0, 1] ==> 5
        Testing: [1, 0, 0, 1] ==> 9
        Testing: [0, 0, 1, 0] ==> 2
        Testing: [0, 1, 1, 0] ==> 6
        Testing: [1, 1, 1, 1] ==> 15
        Testing: [1, 0, 1, 1] ==> 11
P:
    join array values to form a binary number
    use parseInt to convert binary number to base 10
    return converted value

*/

//solution
const binaryArrayToNumber = arr => {
  
  return parseInt(arr.join(''),2)
};