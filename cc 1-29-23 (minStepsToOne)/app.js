/*
Implement a function called "minStepsToOne" that takes in an integer n and returns the minimum number of steps required to reach 1 by performing the following operations:
- Subtract 1 from n (n = n - 1)
- Divide n by 3 (n = n / 3) if n is divisible by 3
- Divide n by 2 (n = n / 2) if n is divisible by 2
*/

//takes a number and returns a number. input will be a positive integer. 
//how to deal with floats? not clear. using math.floor() 

//examples
console.log(minStepsToOne(1),0)
console.log(minStepsToOne(4),2)
console.log(minStepsToOne(7),3)

//solution
//~~ shorthand for Math.floor() for n>0
const minStepsToOne = n => {
    //time complexity will be O(logn) as the while loop will run logarithmically with respect to the input value of n. 
    // space complexity is O(1)  as the function only uses a single variable count to keep track of the number of steps and does not create any additional data structures.
    let count = 0
    while(n>1){
        if(n%2===0){
            n=~~n/2
        }
        else if(n%3===0){
            n=~~n/3
        }
        else{
            n=n-1
        }
        count++
    }
    return count
}
