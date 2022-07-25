/*
You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. positive. >= 0. 
R: integer
E:
    factorial(0) => 1
    factorial(1) => 1
    factorial(5) => 120
P:
    if n > 0
        create a recursion and return factorial
    else return 1    
*/
//solution

let factorial = n => n>0? n*factorial(n-1) : 1