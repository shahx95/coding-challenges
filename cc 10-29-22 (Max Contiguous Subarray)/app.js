/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array only has integers. pos and neg. array will always be provided. array can be empty.
R: integer
E:
        maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
         should be 6: [4, -1, 2, 1]
P:  
    check if arr is not empty or made up of negative numbers. return 0 in this case
    iterate through the array
        check if tally with current element added is greater than the current element value, if not replace tally with current element value
        check if tally is greater than the max tally so far. if it is, reassign max tally
    return max tally after iteration ends    

*/

//solution
var maxSequence = function(nums){
    //[-2, 1, -3, 4, -1, 2, 1, -5, 4]
    //Empty list is considered to have zero greatest sum. 
    if(nums.length===0){return 0}
  
    //If the list is made up of only negative numbers, return 0 instead.
    if(nums.filter(element => element<0).length === nums.length){
      return 0
    }
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
     
    for (let i = 1; i < nums.length; i++) {
       maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    
        // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
        maxSoFar = Math.max(maxSoFar, maxEndingHere);  
      }
    
      return maxSoFar;
     }