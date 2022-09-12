/*
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  array of integers
R:  integer
E:
        1- minimumNumber ({3,1,2}) ==> return (1)
        2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
        3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
P:
    calculate the sum using reduce method
    create a function to check if a number is prime
    in the main function, run a while loop that stops when a number is prime and otherwise increases sum and counter by 1
    return counter value after while loop completes
*/


//solution

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function minimumNumber(numbers){
  let sum = numbers.reduce((total, current)=> total+current,0)
  
  let minimumNumber = 0
  
  while(! isPrime(sum)){
    sum++
    minimumNumber++
  }
  
  return minimumNumber
  
  
}