/*
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

P: parameters R: return E: examples P: pseudocode 

P: input will always be a positive integer >= 1. we dont have to worry about invalid inputs.
R: the function will return an array of integers
E: 
    input is 5 => output is [1,2,3,4,5]
    input is 3 => output is [1,2,3]
    input is 1 => output is [1]
P: 
    we create a function that takes input as a parameter
    initialize an array
    use a loop to push elements from 1 till input value in the array
    return the array
*/

function preFizz(n) {
    let arr = []
    for(let i=1;i<=n;i++){
      arr.push(i)
    }
    return arr
  }