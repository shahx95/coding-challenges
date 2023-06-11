/*
Write a function called "findDuplicates" that takes an array of numbers as input and returns an array containing all the duplicate numbers in the input array. The order of the duplicates in the resulting array should match their order in the input array.

For example, given the input array [1, 2, 3, 4, 2, 5, 6, 1], the function should return [2, 1] since both 2 and 1 are duplicated in the input array.
*/

//example
console.log(findDuplicates([1, 2, 3, 4, 2, 5, 6, 1])); // Output: [2, 1]

//pseudocode
//use a hash object to keep track of numbers encountered before
//if a number is encountered again, it is added to the result array

//solution
function findDuplicates(arr){
    let duplicateCheck = {}
    let result = []
    for(let num of arr){
        if(duplicateCheck[num]){
            result.push(num)
        } else {
            duplicateCheck[num] = true
        }
    }

    return result
}