/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
*/


// function argument will always be an array of integers 

//returns a string

//examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) => "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) => "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) => "Boom!"
// // 97 contains the number seven.



//join the array to form a string and use include method to check for 7
// will have a linear time and space complexity

//solution
const sevenBoom = arr => {
    arrString = arr.join("")
    return arrString.includes("7") ? "Boom!" : "No 7 in the array"
}