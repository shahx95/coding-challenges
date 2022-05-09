/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a integer as an input. 
R: return an array
E: 
    348597 => [7,9,5,8,4,3]
    0 => [0]
P: 
    create a function with a number parameter
    convert the number to string
    split the string to create an array
    apply the reverse method to this array
    return the result
*/


//solution
let convert = number => String(number).split('').reverse()