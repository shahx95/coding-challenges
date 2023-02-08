//Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values.  Return the resulting array

//input will be arrays of integers. output will be array of integers. does order matter?

//examples
myFunction([1, 2, 3], [3, 4, 5]) //[1, 2, 3, 4, 5]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) //[-10, 22, 333, 42, -11, 5, 41]

//spread the input arrays and use set 
//solution
function myFunction (a, b){
return [...new Set([...a,...b])] 
}
