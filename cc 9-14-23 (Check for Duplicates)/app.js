//challenge
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//examples
// Example 1:
console.log(hasDuplicates([1, 2, 3, 1]), true);

// Example 2:
console.log(hasDuplicates([1, 2, 3, 4]), false);

// Example 3:
console.log(hasDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

//solution
function hasDuplicates(nums){
    let hashObj = {}
    for(let num of nums){
        if(hashObj[num]){
            return true
        }
        hashObj[num] = 1
    }
    return false
}

//this solution has a time complexity of O(n), where n is the length of the nums array
// the space complexity is O(n) in the worst case if all elements in nums are unique
// can also check by comparing indexOf and lastIndexOf methods but it will increase time complexity to O(n*n)