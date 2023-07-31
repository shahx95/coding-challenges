// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.


//Examples:
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//Solution:
// [1,2,3,4]
// prefix = [1,1,2,6]
function productArray(arr){
    const prefix = []
    for(let i=0;i<arr.length;i++){
        if(i===0){
            prefix.push(1)
        } else {
            prefix.push(prefix[prefix.length-1]*arr[i-1])
        }
    }
// [1,2,3,4]
// postfix = [24,12,4,1]
    let postfix = []
    for(let i=arr.length-1;i>=0;i--){
        if(i===arr.length-1){
            postfix.push(1)  
        } else {
            postfix = [arr[i+1]*postfix[0], ...postfix]
        }
    }

    const result = []
    for(let i=0;i<postfix.length;i++){
        result.push(prefix[i]*postfix[i])
    }

    return result
}

