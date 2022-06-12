/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
*/

/*
P: parameter R: return value E: examples P: pseudocode

P:  function accepts an integer
R:  function returns an integer
E:
        4 --> 3 (1, 2, 4)
        5 --> 2 (1, 5)
        12 --> 6 (1, 2, 3, 4, 6, 12)
        30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
P:  
    create count variable set to 0
    create a loop from 1 till n
        check if n is a multiple of current loop number
        if n is a multiple
            increase count
    return count        
*/

//solution
function getDivisorsCnt(n){
  let count = 0
  for(let i=1;i<=n;i++){
    if(n%i===0){
      count++
    }
  }
  return count
}