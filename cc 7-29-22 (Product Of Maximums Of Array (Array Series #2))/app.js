/*
Given an array/list [] of integers , Find the product of the k maximal numbers.
Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.



*/
/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers +,- or 0. k is a positve integer.  
R: integer
E:
        maxProduct ({4, 3, 5}, 2) ==>  return (20)
        maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
        maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
P:
    sort the input array in ascending order
    slice the last k elements as provided
    apply the reduce method to multiply and return the total product
*/
//solution
function maxProduct(numbers, size){
    return numbers.sort((a,b)=>a-b)
           .slice(-size)
           .reduce((total,currentVal)=>total=total*currentVal,1)
 }