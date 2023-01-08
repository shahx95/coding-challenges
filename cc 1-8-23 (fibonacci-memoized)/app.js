/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n). You are restricted to memoization.
*/

//memoization brings down time complexity from exponential to linear

//solution
const memo = {}
function fib(n) {
    if(n <= 1){
        return n
    }else if( memo[n] ){
        return memo[n]
    }else{
        let result = fib(n - 1) + fib(n - 2)
        memo[n] = result
        return result
    }
}

console.log(fib(5))