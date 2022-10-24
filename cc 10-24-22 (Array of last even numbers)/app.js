/*
Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integers. can be +ve or -ve.  array will never be empty. length number >=1.
R: array
E:
        ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
        ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
        ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
P:
        Filter the even numbers and slice the end using the -n syntax
*/

//solution
function lastEven(arr,num){
        return arr.filter(element => element%2===0).slice(-num)
}