/*
Given an array/list [] of integers , Find the Nth smallest element in this array of integers
Array/list size is at least 3 .
Array/list's numbers could be a mixture of positives , negatives and zeros .
Repetition in array/list's numbers could occur , so don't Remove Duplications .
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. min array size = 3. integers can be duplicates. 
R: integer
E:
    nthSmallest({3,1,2} ,2) ==> return (2) 
    nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
    nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
P:
    sort the array in ascending order
    return the element on the (position-1) index
*/
//solution

function nthSmallest(arr, pos){
    return arr.sort((a,b)=>a-b)[pos-1]
  }
