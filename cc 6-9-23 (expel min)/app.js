/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

/*
accepts an array of numbers
returns an array
Examples:
        * Input: [1,2,3,4,5], output= [2,3,4,5]
        * Input: [5,3,2,1,4], output = [5,3,2,4]
        * Input: [2,2,1,2,1], output = [2,2,2,1]
Pseudocode:
    [2,5,1,7,8]
    make a copy of the array
    use Math.min to get the minimum number in the array
    use indexOf on the minimum number 
    use splice to delete the element in the derived index
    return the copied array

*/

//solution
function expelMin(numbers) {
    let arr = numbers.slice()
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr
  }