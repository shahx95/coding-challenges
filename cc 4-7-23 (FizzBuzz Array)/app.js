// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n){
    let result = []
    for(i=1;i<=n;i++){
      if(i % 15 == 0){
        result.push("FizzBuzz")
      } else if(i % 5 == 0){
        result.push("Buzz")
      } else if(i %3 == 0){
        result.push("Fizz")
      } else {
        result.push(i)
      }
    }
    return result
  }

//The time complexity of this fizzbuzz function is O(n), where n is the input parameter that specifies the number of elements to generate. The function uses a for loop to iterate from 1 to n and performs a constant number of operations for each iteration, regardless of the input value of n.


//The space complexity of the function is also O(n), because the function generates an array result of size n to store the output values. The amount of memory used by the function scales linearly with the input size n.



  