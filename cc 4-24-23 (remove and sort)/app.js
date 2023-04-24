/*
Remove Duplicates and Sort Array

You are given an array of numbers, but it contains duplicate values. Your task is to write a function that takes in the array as input and performs the following operations:

Remove all the duplicate values from the array.
Sort the resulting array in ascending order.
Return the sorted array with duplicates removed.

Input:

arr: An array of integers (e.g., [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])

Output:

An array of integers with duplicates removed and sorted in ascending order (e.g., [1, 2, 3, 4, 5, 6, 9])
*/



function removeAndSort(arr){
    const uniqueArr = [...new Set(arr)]
    return uniqueArr.sort((a,b) => a-b)
}

//Can you do this with any external libraries or built-in functions that directly solve the problem (e.g., Set, filter, sort, etc.)? You should implement your own logic to achieve the desired result.

function removeAndSort2(arr){
    const hashedObj = {}
    for(let i=0;i<arr.length;i++){
        if( ! hashedObj[arr[i]] ){
            hashedObj[arr[i]] = true
        }
    }
    return Object.keys(hashedObj).sort((a, b) => Number(a) - Number(b))
}

//both solutions have similar time complexity of O(n) for removing duplicates and sorting the array