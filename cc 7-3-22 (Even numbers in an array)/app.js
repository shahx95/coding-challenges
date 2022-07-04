/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
*/

/*
P: parameters R: return value E: examples P:pseudocode

P:  array of integers and an integer. array of integers can have positive and negative values. array will not be empty. array will have asked even numbers. 
R:  array of integers
E:
    ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
P:
    apply filer on the input array to get a filtered array of even numbers
    use the slice method with a negative input to get the slice from the end of the filtered array
    return the array from the slice method
*/


//solution
function evenNumbers(array, number) {
    return array.filter(element => element%2===0).slice(-number)
  }