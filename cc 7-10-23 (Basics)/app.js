/*
Write a function isEmpty(arr) that returns true if the array is empty.
*/

//solution
function isEmpty(arr){
    return arr.length === 0
}


isEmpty([]); // true 
isEmpty([1, 2]); // false 
isEmpty(['a', 'b']); // false 
isEmpty([undefined]); // false 