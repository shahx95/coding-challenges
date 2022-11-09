/*
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: two arguments: one will be string and other integer.   
R: boolean
E:
        add('1', 1) => true
        add(1, '0') => false
        add(12, 12) => true
P: use simple comparison == instead of strict comparison === 
*/


//solution
function add(a, b){
    return a == b 
  }