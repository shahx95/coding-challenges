/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  integer and two primitive data types
R:  array
E:
        5, true, false     -->  [true, false, true, false, true]
        10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
        0, "one", "two"    -->  []
P:
    use Array.from() to create an array of length n and pass a function that returns second value for even indices and first value for odd indices 
*/

//solution
function alternate(n, firstValue, secondValue){
    return Array.from({length: n}, (v, i) => i%2?secondValue:firstValue)
  }