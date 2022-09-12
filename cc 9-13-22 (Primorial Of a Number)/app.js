/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  integer
R:  integer
E:
        1- numPrimorial (3) ==> return (30)
        2- numPrimorial (5) ==> return (2310)
        3- numPrimorial (6) ==> return (30030)
P:  
    create a function isPrime to check if a number is prime
    create another function to calculate the Primorial:
        create an empty array and a counter
        
        while array length is not equal to the input
            check if the counter is prime and add it to array
            increase the counter by 1
    
    use reduce to calculate the primorial and return the value         
*/

//solution

function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
      if(num % i === 0){
        return false
      }
    }
    return true
  }
  
  function numPrimorial(n){
    let arr = []
    let i=2
    
    while(arr.length !== n){
      if(isPrime(i)){arr.push(i)}
      i++
    }
    
  //   console.log(arr)
    return arr.reduce((total,current)=> total=total*current,1)
  }