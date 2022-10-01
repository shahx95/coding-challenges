/*
Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: integers
R: integer 
E: x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
P:
    make use of the mathematic principle
    Let B = b * M and
    A = a * M
    The count of numbers divisible by
    'M' between A and B will be equal
    to b - a.
    if A is divisible by M, ‘b – a’ will exclude the count for A, so the count will be less by 1. Thus, in this case we add 1 explicitly.
*/


//solution
function divisibleCount(x, y, k) {
    return parseInt(y/k) - parseInt(x/k) + (x % k ? 0 : 1)
 }