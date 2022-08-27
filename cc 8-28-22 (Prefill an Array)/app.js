/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: (n,v) where n is integer or string formatted integer greater than 0. v can be any value.
R: array
E:
        prefill(3,1) --> [1,1,1]
        
        prefill(2,"abc") --> ['abc','abc']
        
        prefill("1", 1) --> [1]
        
        prefill(3, prefill(2,'2d'))
        --> [['2d','2d'],['2d','2d'],['2d','2d']]
        
        prefill("xyz", 1)
        --> throws TypeError with message "xyz is invalid"
P:
    check if n is 0 or '0' and return an empty array 
    check if n is not an integer or is less than 0 (negative). return a TypeError

    otherwise use Array.from or Array.fill to create an array of length n filled with v

*/
//solution
function prefill(n, v) {
    if(n === 0 || n === '0') return [];
    if(!Number.isInteger(n) || n < 0 ){
      let TypeError = new Error;
      TypeError.name = "TypeError";
      TypeError.message = n + " is invalid";
      throw TypeError
    };
    
    
    return Array.from({length:n}, (_) => v)
  }