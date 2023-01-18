// Given an array of integers, find the maximum sum of any of its subarrays.

//edge cases
// The array could be empty
// The array could contain negative integers

//examples
//Input: [1, -2, 3, 4, -5, 6] => Output: 11
//Input: [-1, -2, -3, -4, -5, -6] => Output: -1
 
//time and space complexity
// Time: O(n) - length of array
// Space: O(1)

//solution
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
