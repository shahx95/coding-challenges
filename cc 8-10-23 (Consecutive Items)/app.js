/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

/*
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
    return Math.abs(arr.indexOf(a)-arr.indexOf(b))===1 //will we have multiple instances of these numbers???
  }

//space complexity is O(1) because it only uses a constant amount of memory to store the variables arr, a, and b. 
//time complexity is O(n), where n is the length of the input array arr.  