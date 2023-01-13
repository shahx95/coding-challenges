/*
"Write a function called findSumPairs that takes in two arguments:

an array of integers called nums
an integer target
The function should return an array of arrays, where each sub-array contains exactly two integers that add up to the target. If no such pairs exist, the function should return an empty array.

You should not use any libraries or built-in functions, and the solution should have a time complexity of O(n).
*/

//input array elements and target will always be integers. 
//can same element make multiple pairs?

//example
console.log(findSumPairs([1, 2, 3, 4, 5], 7));
// Output: [[2, 5], [3, 4]]

//using hashed object whcih has complexity of O(1) so the solution will have time complexity of O(n) for an n-sized input array
//solution
function findSumPairs(arr,target){
    let obj = {}
    let result = []
    for(let element of arr){
        if(obj[target-element]){
            result.push([element,target-element])
        }
        obj[element] = true
    }
    return result
}