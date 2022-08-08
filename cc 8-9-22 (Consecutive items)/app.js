/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers and two integer values. 
R: bool
E:
    consecutive([1,2,3,4], 3, 2) => true
    consecutive([1,2,3,4], 4, 2) => false
P:
    use indexOf method to get the position of each element
    find the absolute difference of the two indexes
        if difference is 1 then return true
        else return false
*/

//solution
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a)-arr.indexOf(b))===1
  }