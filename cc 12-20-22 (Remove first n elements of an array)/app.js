//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

//examples
/*
myFunction([1,2,3,4]) => [4]
myFunction([5,4,3,2,1,0]) => [2,1,0]
myFunction([99,1,1]) => []
*/

//use inbuilt slice method. time complexity will be O(N)
//solution
const myFunction = arr => arr.slice(3)