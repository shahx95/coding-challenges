//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//array will include only integers
//function will return a boolean value

/*
Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// solution:

const containsDuplicate = arr => {
    let obj = {}
    for(element of arr){
        if(obj[element]){
            return true
        } else{
            obj[element] = true
        }
    }
    return false
}

//time complexity: O(n) where n is the number of elements in the array at worst case
//space complexity: O(n) where n is the number of elements in the array at worst case
//using hash object allows us to bring down time complexity from O(n^2) via brute force to O(n)