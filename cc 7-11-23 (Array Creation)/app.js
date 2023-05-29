/*
Question:
What are the different ways to assign an array in JavaScript? Explain each method with examples.
*/

//solution
//literal notation: put comma separated iterables within square brackets
let myArray = [1,2,3,4,5]

//array constructor: use inbuilt array constructor with comma separated elements
let myArray2 = new Array(1,2,3,4,5) 

//spread operator: use the spread operater to create a new array from existing array like object along with any new element
let myArray3 = [...myArray, 6,7,8]

//array from: use Array.from() method to create a new array from an iterable
let myArray4 = Array.from("Hello") //['H','e','l','l','o']

//empty array and then populate: assign an empty array using [] and then populate array using push method
let myArray5 = []
myArray5.push(1) 
myArray5.push(2) 
myArray5.push(3) 
myArray5.push(4)
//[1,2,3,4] 
