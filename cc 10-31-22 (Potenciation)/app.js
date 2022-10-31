/*
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata

Great coding <3
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: only natural numbers. 
R: integer.
E: 
    power(2,2) => 4
    power(0,1) => 1
P: use a for loop and multiply until y
*/

//solution
function power(x,y){
    let power = 1
    for(let i=1;i<=y;i++){
      power *= x
    }
    return power
  }