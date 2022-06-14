/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes in two integers
R:  function returns an integer
E:  

P:
    create a loop that squares every number until n
    for each number, split into an array of characters
    compare each character with d
        increase counter if comparison is true
    after loop ends return the counter value    
*/


//solution
function digitCounter(n,d){
    let count = 0
    let arr = []    
    for(let k=0;k<=n;k++){
        arr = (k*k).toString().split("")
        arr.forEach( element => element==d? count++ : count )
    }
    return count
}






