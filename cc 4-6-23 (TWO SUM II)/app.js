/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
*/

//example
/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

//example
/*
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
*/

//example
/*
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

//solution
function twoSum(arr,target){
    let left = 0
    let right = arr.length-1
    while(left < right){
        if( (arr[left] + arr[right]) > target ){
            right--
        } else if( (arr[left] + arr[right]) < target ) {
            left++
        }
        else if( (arr[left] + arr[right]) == target ){
            return [left+1, right+1]
        }
    }

    return null //don't need this since we are guaranteed a successful result
}

//this solution has a time complexity of O(n) in worst case since we are only passing the array once
//the space complexity is O(1). The function only uses a constant amount of memory to store two pointers (left and right) and the output array ([left+1, right+1]).

//brute forcing can solve this problem through nested loops and comparison. time complexity of this solution will be O(n*n). This is because we are checking every possible pair of elements in the array