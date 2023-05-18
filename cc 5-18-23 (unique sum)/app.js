/*
Challenge: Unique Sum
Write a function that takes an array of numbers as input and returns the sum of all unique numbers in the array. If there are duplicate numbers, ignore them and only include each number once in the sum.

*/


//solution
function uniqueSum(arr){
    let obj = {}
    let total = 0
    for(let number of arr){
        if(! obj[number]){
            total +=number
        }
        obj[number] = true
    }
    return total
}

//examples
uniqueSum([1, 2, 3, 2, 4, 5, 4, 6]); // Output: 21 (1 + 2 + 3 + 4 + 5 + 6 = 21)
uniqueSum([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

//solution has a linear time complexity and linear space complexity

