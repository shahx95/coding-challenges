/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: Integer. >= 1.
R: Array 
E: 
        fizzbuzz(3) -->  [1, 2, "Fizz"]
P:

    Create and label an empty array
    Setup a for loop from 1 till n:
        for each integer check if it is a multiple of 5 and 3. if it is push fizzbuzz in the created array
        otherwise check if it is a multiple of 3 and push fizz to the array
        otherwise check if it is a multiple of 5 and push buzz to the array
        otherwise push the number to the array
    return the array after loop completes    
*/


//solution
 
function fizzbuzz(n)
{
  let arr = []
  for(let i=1;i<=n;i++){
    if(i%5===0 && i%3===0){
      arr.push('FizzBuzz')
    }
    else if(i%3===0){
      arr.push('Fizz')
    }
    else if(i%5===0){
      arr.push('Buzz')
    }
    else{
      arr.push(i)
    }
  }
  return arr
}