/*
Given an array of integers , Find the Nth smallest element in this array of integers.

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. can be +ve or -ve integers. can be zero. no floats. no empty array. 
R: integer
E:
        nthSmallest({3,1,2} ,2) ==> return (2) 
        nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
        nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
        nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
P:
    sort the array in ascending order using javascript sort method
    access the nth element by getting element at nth - 1 index
    return the element
*/

//solution
const nthSmallest = (arr, val) => arr.sort((a,b) => a-b)[val-1]
