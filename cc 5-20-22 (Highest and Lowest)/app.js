/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

/*
P: parameters R: return value E: examples P:pseudocode

P: the function accepts a string of numbers. As mentioned in the challenge, no other input will be provided so no need to validate. 
R: returns a string
E:
    highAndLow("1 2 3 4 5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
P:
    convert the numbers string into an array 
    use max and min methods to get the respective values
    spread operator with the math methods to get the elements out of the array
    return using string template

*/

//solution
function highAndLow(numbers){
    // ...
    let numbersArray = numbers.split(' ') 
    let max = Math.max(...numbersArray)
    let min = Math.min(...numbersArray)
    return `${max} ${min}`
  }
