/*
Challenge: Find the Duplicate Number
You are given an array of numbers, where each number appears once except for one number which appears twice. Your task is to write a function that finds and returns the duplicate number.

Instructions:
Write a function called findDuplicateNumber(nums) that takes in one parameter:

nums: An array of numbers (length >= 2), where all numbers except one appear once.
Your function should return the duplicate number.

Note:

You can assume that there will always be exactly one duplicate number in the array.
Feel free to ask if you have any questions. Happy coding!
*/


//Example:
findDuplicateNumber([1, 3, 2, 4, 2, 5]) //should return 2, as it is the duplicate number in the array.


//solution
function findDuplicateNumber(nums){
    if(nums.length<2){
        return "Invalid input" 
    }
    const hashObj = {} // space complexity of O(n) worst case when no duplicates
    for(let number of nums){ //time complexity of O(n) worst case when no duplicates
        if(hashObj[number]){ //time complexity of O(1)
            return number
        } else {
            hashObj[number] = true
        }

    }

    return "No Duplicate"
}