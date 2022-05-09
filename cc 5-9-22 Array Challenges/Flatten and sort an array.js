/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a 2D array only.
R: return an array 
E: 
    [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
    [[3, 2, 1], [7, 9, 8], [6, 4, 5]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
    [[], [1]] => [1]
P: 
    we cant use the flat method
    create a function that accepts an array
    two problems to solve: merge the sub arrays in a single array and then sort them
    to merge the array, use concat with reduce and store in a variable
    to sort the merged array, use the good ole sort method and store the sorted array in a variable
    return the sorted array 
*/

//solution

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let flatten = array.reduce( (total,currentVal) => {
    return total = total.concat(currentVal)
  },[] )
  
  let flattenSorted = flatten.sort( (a,b)=>a-b )
  return flattenSorted
}


/*
single line solution for when you are feeling fancy: [].concat(...array).sort((a,b) => a - b)
*/

/* 
array.flat() is a method we can use to flatten the array
if we were to use it, we would only have to sort the flattened array 
[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [3, 2, 1, 4, 6, 5, 9, 7, 8]
using sort on this [3, 2, 1, 4, 6, 5, 9, 7, 8].sort( (a,b)=>a,b ) will return [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/