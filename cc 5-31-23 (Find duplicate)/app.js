//Given an integer array nums, return array of values which appear at least twice in the array, and return [ ] empty array if every element is distinct.


/*
Example 1:
Input: nums = [1,2,3,1]
Output: [1]

Example 2:
Input: nums = [1,2,3,4]
Output: []

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: [1,2,3,4]
*/

//solution
function findDuplicate(arr){
    // Check if input is valid
    if(!Array.isArray(arr) && arr.length<1){
        return null //invalid input 
    }
    let hashObj = {} //O(n) space complexity if all numbers are unique
    let result = []
    for(let number of arr){ //O(n) time complexity
        if(hashObj[number]){
            result.push(number)
        } else {
            hashObj[number] = true
        }
    }
    return result
}