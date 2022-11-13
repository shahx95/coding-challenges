/*
In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

Equation will be the form of ax^2 + bx + c = 0

Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

Since there are infinitely many solutions to this problem, we fix a = 1.

Remember, the roots can be written like (x-x1) * (x-x2) = 0

Inputs will be integers.
When x1 == x2, this means the root has the multiplicity of two
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integers
R: array of integers
E:
        quadratic(1,2) = (1, -3, 2)
        quadratic(0,1) = (1, -1, 0)
P:  a is 1, b is the sum of the negatives of x1 & x2, c is the product of x1 & x2


*/

//solution
function quadratic(x1, x2){
    return [1, -(x2 + x1), (x1 * x2)]
 }