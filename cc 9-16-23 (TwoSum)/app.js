// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



//solution
function twoSum(arr, target){
    let hashObj = {} //O(N) space complexity worse case if no sum is found but we are guaranteed a sum
    for(let i=0;i<arr.length;i++){ //O(N) time complexity worst case
        if(hashObj[target - arr[i]] !== undefined){
            return [hashObj[target-arr[i]], i]
        }
        hashObj[arr[i]] = i
    }
}


//examples
console.log(twosum([2,7,11,15], 9), [0,1]);
console.log(twosum([3,3], 6), [0,1]);
console.log(twosum([3,2,4], 6), [1,2]);
