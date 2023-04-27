/*
Create a function that takes in an array of numbers and returns the sum of all even numbers in the array.

For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return 12 (which is the sum of 2, 4, and 6).

Here are the requirements:

You must use JavaScript for this challenge.
The function should take in one parameter, an array of numbers.
The function should return a single number, which is the sum of all even numbers in the array.
If the array is empty or does not contain any even numbers, the function should return 0.
Your solution should be efficient and use minimal memory.
You may not use any external libraries or built-in JavaScript functions that directly solve the problem (e.g. filter(), reduce(), etc.).
*/


//solution
function evensTotal(arr){
    let total = 0
    for(let num of arr){
        if(num%2===0){
            total+=num
        }
    }
    
    //time complexity O(n)
    //space complexity O(1)
    return total
}

//solution with reduce
function sumOfEvens(arr){
    return arr.reduce((total,current) => current%2===0?total+=current:total, 0)
}