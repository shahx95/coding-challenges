/*
Write a function that takes two arguments: an array of integers and an integer n. The function should find two numbers in the array that add up to n. If there is no such pair, the function should return null.
*/

//input of an integer array and a sum (int)
//output array of 2 int

//examples
findPair([1, 2, 3, 4, 5], 9) // [4, 5]
findPair([1, 2, 3, 4, 5], 8) // [3,5]
findPair([1, 2, 3, 4, 5], 11) // null

//time complexity of O(n) where n is length of the array worst case
//space complexity of O(n) where n is number of unique elements in array

//solution
function findPair(arr,sum){
    let obj = { } // {1: true, 2:true, ...}
    for(let element of arr){
        if(obj[sum - element]){
            return [sum-element,element]
        } 
        obj[element] = true
    }
    return null
}