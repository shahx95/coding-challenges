/*
Given an array of integers, find the first missing positive integer.
If the input array is empty, return 1
If the input array is of length 1, return 2 if the first element is 1, otherwise return 1
*/

/*
Example:
Input: [3, 4, -1, 1]
Output: 2

Input: [1, 2, 0]
Output: 3
*/

/*
Time: O(n log n) because of using sort()
Space: O(1)
*/

//solution
const missingInteger = arr => {
    arr.sort()
    let count = 1
    for(let num of arr){
        if(num>0){
            if(num!==count){return count}
            else{count++}
        }
        
    }
    return count
}