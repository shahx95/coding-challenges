/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

//examples
console.log(twoSum([2,7,11,15],9)) //expect [1,0] or [0,1] 
console.log(twoSum([3,2,4],6)) //expect [1,2] or [2,1] 
console.log(twoSum([3,3],6)) //expect [1,0] or [0,1] 

//brute force logic will be to run nested loops and compare each value with every other value O(n*n)

//solution
function twoSum(arr, target){
    const obj = {} //space complexity worst case O(n)
    for(let i=1;i<=arr.length;i++){ //time complexity worst case O(n)
        if(obj[target - arr[i-1]]){ //index - 1 to cancel out offset - retrieval from obj is O(1) 
            return [i-1, obj[target - arr[i-1]] - 1]
        }
        obj[arr[i-1]] = i 
    }
    return null
}

//obj = {}
//i=1
//obj[9 - arr[1-1]] = obj[9 - arr[0]] = obj[9 - 2] = obj[7]
//not in the obj
//obj[arr[1 - 1]] = obj[arr[0]] = obj[2] = 1
//{2:1}
//i=2
//obj[9 - arr[2-1]] = obj[9 - arr[1]] = obj[9 - 7] = obj[2] exists
//[i-1, obj[target - arr[i-1]] - 1] = [2-1, obj[target - arr[2-1]] - 1] = [1,  obj[9-arr[1]] - 1] = [1 - obj[9-7] - 1] = [1, 1-1] = [1,0] returned