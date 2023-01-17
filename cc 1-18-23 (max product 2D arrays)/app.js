/*
question:

Write a function called "largestProduct" that takes in a 2D array of integers and returns the largest product that can be obtained by multiplying any three integers from the array. If the 2D array is empty or has less than 3 integers, return -1.

*/

//edge cases?
//input is a 2D array, check if it is empty or has less than 3 integers, if so return -1

//example
console.log(largestProduct([[1,2,3],[4,5,6],[7,8,9]])) // Output: 504
console.log(largestProduct([[-1,2,-3],[4,-5,6],[-7,8,-9]])) // Output: 504
console.log(largestProduct([[]])) // Output: -1

//time and space complexity
//solution will have time complexity of O(n^2)
//The solution will have O(1) space complexity as we are using only a few variables

//solution bruteforce
function largestProduct(arr) {
    //defining a variable maxProduct with initial value -1
    let maxProduct = -1;
    //nested loops to iterate over every element in the 2D array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let current = arr[i][j];
            for (let x = 0; x < arr.length; x++) {
                for (let y = 0; y < arr[x].length; y++) {
                    if (x === i && y === j) continue;
                    //two more nested loops to iterate over all possible combinations of three integers
                    for (let z = 0; z < arr.length; z++) {
                        for (let w = 0; w < arr[z].length; w++) {
                            if (z === x && w === y) continue;
                            if (x === i && z === i && y === w) continue;
                            let product = current * arr[x][y] * arr[z][w];
                            //calculates the product of the three integers and compares it to maxProduct
                            if (product > maxProduct) maxProduct = product;
                        }
                    }
                }
            }
        }
    }
    return maxProduct;
}

 