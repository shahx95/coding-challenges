/*
Implement a function that finds the longest common prefix string amongst an array of strings.
If the array is empty or if there is only one element in the array, return an empty string
If there is no common prefix, return an empty string
*/

//Input: an array of strings arr
//Output: a string representing the longest common prefix

/*
Input: ["flowers", "flow", "flight"]
Output: "fl"

Input: ["dog", "racecar", "car"]
Output: ""

*/

//time complexity: O(n * m), where n is the number of strings in the input array and m is the length of the longest string in the array.

//space complexity: O(1) - we are only saving a string for prefix in memory

//solution
const longestPrefix = arr => {
    //empty array
    if(!arr.length){return ""}
    
    
    let prefix = arr[0]
    for(let i=1; i<arr.length; i++){
        while(arr[i].indexOf(prefix)!==0){
            prefix = prefix.substring(0, prefix.length-1)
            if(!prefix.length){return ""}
        }
    }
    return prefix
}