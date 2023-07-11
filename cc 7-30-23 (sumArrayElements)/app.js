//Write a function called "sumArrayElements" that takes an array of numbers as input and returns the sum of all the elements in the array.

//examples
sumArrayElements([1, 2, 3, 4, 5]); // Output: 15 (1 + 2 + 3 + 4 + 5)
sumArrayElements([-5, 10, 2]); // Output: 7 (-5 + 10 + 2)
sumArrayElements([100, 200, 300]); // Output: 600 (100 + 200 + 300)


//solution 
function sumArrayElements(arr){
    return arr.reduce((total,current)=>total+current,0)
}

//time complexity
// O(n) where n is the length of the input array since we are iterating over each element 
//space complexity
// O(1) since total and current will hold values taking constant space