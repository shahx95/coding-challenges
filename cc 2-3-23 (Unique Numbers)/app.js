/*
Create a function that takes an array of integers and returns an array of unique elements.
*/

//input will be an array of integers
//output will be an array of integers

//Examples:

//input: [1, 2, 2, 3, 3, 4, 4, 5, 5] => output: [1, 2, 3, 4, 5]
//input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//input: [1, 2, 3, 2, 4, 5, 4, 6, 7, 5, 8, 9, 10] => output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Time complexity: O(n) where n is the length of the input array.
// Space complexity: O(n) where n is the number of unique elements in the input array.

//solution
function uniqueVal(arr){
    uniqueVal = {}
    for(element of arr){ //O(n)
        if(! uniqueVal[element]){
            uniqueVal[element] = true
        }
    }
    return Object.keys(uniqueVal) //O(n)
}