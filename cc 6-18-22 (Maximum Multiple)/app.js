/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
*/

/*
P: parameters R: return values E: examples P: pseudocode

P:  function accepts two integers. 
R:  function returns an integer
E:
        maxMultiple (2,7) ==> 6
        maxMultiple (10,50)  ==> 50
        maxMultiple (37,200) ==> 185
P:
    7-7%2 = 6 
    we make use of simple maths principle that subracting remainder from the bound will give us the nearest multiple
*/

//solution
function maxMultiple(divisor, bound){
    //the remainder of a division is the amount you would need to 
    //substract from the bound in order to get a whole multiple
    return bound - bound%divisor 
  }