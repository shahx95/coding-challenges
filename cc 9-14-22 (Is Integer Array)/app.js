/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array
R: boolean
E:
        [1, 2, 3, 4] => true
        [undefined] => false
        [1, 2, NaN] => false
P: 
    if it is an array, apply every method and return its result
    else return false
*/

//solution
function isIntArray(arr) {
    if(arr){
    return arr.every(element => Number.isInteger(element))
    }
    else return false
  }