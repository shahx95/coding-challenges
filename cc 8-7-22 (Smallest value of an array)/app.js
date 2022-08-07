/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers and string
R: integer
E:
    min([1,2,3,4,5], 'value') // => 1
    min([1,2,3,4,5], 'index') // => 0
P:
    find the min using Math.min
    if toReturn has value, return the min value 
    else return the index of the min value using indexOf method 
*/

//solution
function min(arr, toReturn) {
    const min = Math.min(...arr)
    return toReturn === 'value'? min : arr.indexOf(min)
  }