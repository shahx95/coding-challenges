/*
 Write a function that takes an array of numbers and returns the smallest and largest numbers in the array.
*/

function getMinMax(arr){
    if (arr.length === 0) {
        return { min: undefined, max: undefined } //empty array
      }
    arr.sort((a,b)=>a-b) //O(nlogn) time complexity
    return {
            min: arr[0],
            max: arr[arr.length-1]
            } // O(1) space complexity
}


//note: sorting the entire array to find the minimum and maximum values may not be the most efficient approach if array is large
//alternate solution by keeping track of the minimum and maximum:
function getMinMax2(arr){
    if (arr.length === 0) {
        return { min: undefined, max: undefined } //empty array
    }
    let min = arr[0] // O(1) space complexity
    let max = arr[0] // O(1) space complexity
    
    for(let i=0;i<arr.length;i++){ //O(n) time complexity
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return {
        min, max
    } // O(1) space complexity
} 

//examples
const array = [1, 2, 3, 4, 5]
const minMax = getMinMax(array)
console.log(minMax.min) // 1
console.log(minMax.max) // 5

const array1 = [] //empty array
const minMax1 = getMinMax(array1)
console.log(minMax1) // { min: undefined, max: undefined }

const array2 = [5] //single element
const minMax2 = getMinMax(array2)
console.log(minMax2) // { min: 5, max: 5 }

const array3 = [-10, 2, 0, -5, 7] //negative numbers
const minMax3 = getMinMax(array3)
console.log(minMax3) // { min: -10, max: 7 }

const array4 = [3, 1, 4, 1, 5, 9, 2, 6, 5] //duplicates
const minMax4 = getMinMax(array4)
console.log(minMax4) // { min: 1, max: 9 }

const array5 = [2.5, 1.8, 3.2, 4.9, 2.1] //floats
const minMax5 = getMinMax(array5)
console.log(minMax5) // { min: 1.8, max: 4.9 }
