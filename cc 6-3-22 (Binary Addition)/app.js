/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/


/*
P:  takes two integer values
R:  returns a string of binary 
E:
        1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
        5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)    
P:
    add both the numbers 
    convert to binary string using toString(2)
    return
*/

//solution
function addBinary(a,b) {
    return (a+b).toString(2)
  }