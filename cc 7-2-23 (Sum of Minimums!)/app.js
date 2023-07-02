/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
Note: You will always be given a non-empty list containing positive values.
*/

/*
function accepts an array of arrays. each element array only has positive integers
function returns an integer
Example:
        [ [ 1, 2, 3, 4, 5 ] , [ 5, 6, 7, 8, 9 ] , [ 20, 21, 34, 56, 100 ] ] => 26 (1 + 5 + 20 = 26)
Pseudocode:  
    use the reduce array method to loop through array:
        for each element array, use Math.min to get the lowest value and add it to the total
    return reduce method's total    

*/

//solution
function minSumArr(arr){
    return arr.reduce((total, current)=> total + Math.min(...current),0)
}





