/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

/*
P: parameters R: return E: examples P: pseudocode

P: function takes in two integers. integers can be positive or negative.  
R: function returns an integer
E:
        (1, 0) --> 1 (1 + 0 = 1)
        (1, 2) --> 3 (1 + 2 = 3)
        (0, 1) --> 1 (0 + 1 = 1)
        (1, 1) --> 1 (1 since both are same)
        (-1, 0) --> -1 (-1 + 0 = -1)
        (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
P:
    if both values are equal return any one of them
    else
        find the min value
        find the max value
        use a loop to get the sum of all values between the min and max values (including)
        return the sum

*/

//solution
function getSum( a,b )
{
   //Good luck!
  if(a===b){
    return a
  }
  else{
    let sum = 0
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    for(let i=min;i<=max;i++){
      sum = sum + i
    }
    return sum
    
  }
}