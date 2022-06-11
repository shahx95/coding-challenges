/*
Round up to the next multiple of 5

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function accepts an integer only
R:  function returns an integer
E:
        input:    output:
        0    ->   0
        2    ->   5
        3    ->   5
        12   ->   15
        -2   ->   0
        -5   ->   -5
P:
    can solve this using math ceil method or just the while loop
    while loop:
        check if n is not a multiple of 5
        increase n by 1 and check again
        when n becomes a multiple of 5 (modulus 0) end while
    return n     
*/

//solution
function roundToNext5(n){
    while(n%5!==0){
        n++
    }
    return n
}

//Math ceil method
/*
let roundToNext5 = n => Math.ceil(n/5)*5
*/