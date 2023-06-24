/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
Note: You will always be given a non-empty list containing positive values.
*/

/*
P: parameters R: return E: examples P: pseudocode

P: function accepts an array of arrays. each element array only has positive integers
R:  function returns an integer
E:
        [ [ 1, 2, 3, 4, 5 ] , [ 5, 6, 7, 8, 9 ] , [ 20, 21, 34, 56, 100 ] ] => 26 (1 + 5 + 20 = 26)
P:  
    use the reduce array method to loop through array:
        for each element array, use Math.min to get the lowest value and add it to the total
    return reduce method's total    

*/

//solution
function sumOfMinimums(arr){
    return arr.reduce( (total,elementArr) => Math.min(...elementArr)+total,0)
} 