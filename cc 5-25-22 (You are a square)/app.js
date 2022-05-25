/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function will be provided with an integar. no other type is expected so validation is not required
R: function will return a boolean value
E:
    -1  =>  false
    0  =>  true
    3  =>  false
    4  =>  true
    25  =>  true
    26  =>  false
P:
    take the square root of the number 
    use the isInteger method to check if the square root is an integer
*/


//solution
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
    }

