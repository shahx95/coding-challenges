/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain.

Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  array of integers
R:  array of arrays
E:
        group([3, 2, 6, 2, 1, 3])
        => [[3, 3], [2, 2], [6], [1]]
P:
    create a result variable assigned to an empty array
    use filter on the input array for each element to get an array of the duplicate values
    push the filtered array to result variable
    to remove pushed values from the input array, filter out all the pushed values from the input array 
*/

//solution
function group(arr) {
    let result = []
    while(arr.length > 0){
      result.push(arr.filter(element => element === arr[0]))
      arr = arr.filter(element => element !== arr[0])
    }
    
    return result
  }