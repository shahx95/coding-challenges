/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  array
R:  integer
E:
    [] => 0
    [1,2,3,4,5,6] => 13
    [1,2,3,4,5,6,7,8] => 21
P:
    create a isPrime function to check for prime
    create another function to calculate the total
        apply reduce on the argument array with total initialized to 0
        if element index is prime, add element to total else return total as is
    return sum returned by reduce    
*/

//solution
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


function total(arr){
  return arr.reduce((total,current,index) => isPrime(index)?total+current:total,0)
};