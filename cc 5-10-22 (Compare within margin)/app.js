/*
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: 3 function parameters which will all be integers. if they are not integers we will return an error
R: return an integer value 
E: 
    closeCompare(4, 5) => -1
    closeCompare(-6, -5) => -1
    closeCompare(8.1, 5, 3) => 1

P: 
    create a function with 3 parameters
    validate the parameters to be integers
    create a comparison if/else
    return the respective result for the comparison which returns true
*/

function closeCompare(a, b, margin){
    // ...
    if(typeof(a)==='number' && typeof(b)==='number' && (typeof(margin)==='number'||typeof(margin)==='undefined')){
        if((margin||0) >= Math.abs(a-b)){
            return 0
          }
          else if(a<b){
            return -1
          }
          else{
            return 1
          }
    }
    else{
        return 'Invalid input'
    }
  }

// could have used Math.sign as well which returns 1 or -1 for a-b   