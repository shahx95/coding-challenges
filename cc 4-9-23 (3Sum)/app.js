/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

example 2:
Input: nums = [0,1,1]
Output: []

example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
*/

//bruteforce approach will be a triple nested loop to check for every possible combination individually
//bruteforce will have a time complexity of O(n^3) 


//solution
function threeSum(arr){
    //arr = [-1,0,1,2,-1,-4]
    arr.sort((a,b) => a-b) //[-4, -1, -1, 0, 1, 2]

    const result = []

    for(let i=0;i<arr.length;i++){
        if(i>0 && arr[i] === arr[i-1]){
            continue
        }
        
        let left = i, right = arr.length - 1
        while(left < right){
            let sum = arr[i] + arr[left] + arr[right]
            if(sum > 0){
                right--
            }
            else if(sum < 0){
                left++
            }
            else{
                result.push([arr[i],arr[left],arr[right]])

                left++
                while(arr[left] == arr[left-1] && left<right){
                    left++
                }
            }
        }
    }

    return result

}

//sort will have time complexity of O(nlogn)
//nested loop will have time complexity of O(n^2)
//overall time complexity reduces to O(n^2)
//space complexity will be O(1) since a constant amount of extra space is used to store the result array, and the left and right pointers 