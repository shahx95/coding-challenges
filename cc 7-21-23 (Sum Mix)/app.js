/*
Write a function called sumArray that takes in an array of numbers as its parameter and returns the sum of all the numbers in the array.
Make sure to handle edge cases such as an empty array or an array with non-numeric values.
*/

//examples
sumArray([1, 2, 3, 4, 5]); // Output: 15
sumArray([10, 20, 30, 40]); // Output: 100
sumArray([-1, 0, 1]); // Output: 0


//solution
function sumArray(arr){
    return arr.reduce((total,current)=>total+current,0) 
    //time compelxity of O(n) space complexity of O(1)
}