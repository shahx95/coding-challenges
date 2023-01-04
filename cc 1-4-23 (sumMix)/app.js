// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Edge cases: Any special characters? Spaces?

//Return sum of array vals as a single num
console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

//make a function that takes in an array
function sumMix(arr){
    //map through arr and make all elements numbers. Also add them via reduce.
    //complexity of O(n) 
    return arr.reduce((total,current)=>total+Number(current), 0)
}
 