/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

//example
console.log(twoSum([2,3,5,6,8],9), [1, 3])
console.log(twoSum([1,2,3,5,6],7), [0, 4])
console.log(twoSum([1,2,3,5,6],4), [0, 2])

//what if we are given an empty array? it is assumed that each input will have a single solution so we don't expect an empty array
//will the array integers be sorted?
//Will the integers be positive at all times?

//bruteforce solution via nested loop
function twoSum(nums, target){

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){ //time complexity O(n^2)
            if(nums[i] + nums[j] === target){ 
                return [i,j]
            }
        }
        //space compexity O(1).  all variables use a constant space. 
    }

}
//Can you come up with an algorithm that is less than O(n2) time complexity?
//optimized solution via hashing
function optimizedTwoSum(nums, target){
    let hashObj = {} // {number1: index, number2: index, ...}
    for(let i=0;i<nums.length;i++){
        if(hashObj.hasOwnProperty([target - nums[i]])){
             return [hashObj[target - nums[i]],i]
        }
        hashObj[nums[i]] = i
    }
}

// This approach has a time complexity of O(n) since it only requires a single pass through the array, and the hash table allows for efficient lookup and retrieval of values. It is an optimized solution compared to the nested loop approach, which has a time complexity of O(n^2).