/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
examples

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/


//solution
// [0,2,3,6,8,11,23] target = 6 => 3

function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1

    while(left <= right){
        let midpoint =  Math.round((left + right) / 2)
        // console.log(midpoint)
        if(arr[midpoint] > target){
            right = midpoint - 1
        }
        else if(arr[midpoint] < target){
            left = midpoint + 1
        }
        else return midpoint
    }

    return -1
}