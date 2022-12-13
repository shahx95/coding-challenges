/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

From: https://leetcode.com/problems/contains-duplicate/
*/



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

//using hashmap pattern with a for loop so time complexity will be linear 
//can use set as well to find unique but hashmap will perform better for large arrays  

function containsDupes(arr){
    let numsMap = {}
    for(let i = 0; i < arr.length; i++){
      let num = arr[i]
      if(numsMap[num]){
        return true
      }else{
        numsMap[num] = true
      }
    }
    return false
  }
  
  console.log(containsDupes([1,2,3,1]),'true')
  console.log(containsDupes([1,2,3,4]),'false')
  console.log(containsDupes([1,1,1,3,3,4,3,2,4,2]),'true')