/*
You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: will always be array of 3 integers. no floats. no wholenumbers. no funny biz. 
R: integer
E:
gimme([2, 3, 1]) => 0
gimme([5, 10, 14]) => 1
P:
    use sort on a copy of the array 
    get the central value in index 1
    use indexOf to get the index of the central sorted value in the original array
    return the index
*/

//solution
function gimme(arr){
    return arr.indexOf([...arr].sort((a,b) => a-b)[1])
}