/*
Write a JavaScript function called getRandomArrayElement(arr) that takes an array arr as input and returns a random element from the array.

The function should have the following requirements:

It should work for arrays of any length, including empty arrays.
It should not modify the original array.
It should return undefined if the input is not an array or if the array is empty.
You can use any built-in JavaScript methods or syntax to implement this function, but do not use any external libraries or packages.
*/

/*
const myArray = [1, 2, 3, 4, 5];
const randomElement = getRandomArrayElement(myArray);
console.log(randomElement); // Output: 3 (or any other random element from myArray)

*/

function getRandomArrayElement(arr){
    if(Array.isArray(arr) && arr.length>=1){
        const randomNum = Math.floor(Math.random()*arr.length)
        return arr[randomNum]
    }
    return undefined
}