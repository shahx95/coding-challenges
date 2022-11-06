/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:      integer. always positive. 
R:      integer
E:
        sumFibs(1000) should return 1785.
        sumFibs(4000000) should return 4613732.
        sumFibs(75024) should return 60696.
P:
        
*/

//solution
function sumFibs(num) {
        let  n = 0, nPlusOne = 1, temp;
        let sum = 0;
      
        while (n <= num){
          temp = n;
          n = n + nPlusOne; 
          nPlusOne = temp;
      
          if (nPlusOne % 2 !== 0) {
                sum += nPlusOne;
          }
      
        }
      
        return sum;
      }