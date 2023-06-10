/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/


/*
parameter R: return value E: examples P: pseudocode
function takes an array of integers
function returns an integer
E:
        [1, 1, 2] ==> 2
        [17, 17, 3, 17, 17, 17, 17] ==> 3
P:
    many ways to solve this
    since we know that there is only one stray number we can compare which number doesnt match the rest
    loop through the numbers
        use indexOf and lastIndexOf comparison. since only one stray number both index results will be equal 
        return the number which is true for the comparison
*/

//solution
const strayNumber = numbers => {
    for(let element of numbers){
        if(numbers.indexOf(element)===numbers.lastIndexOf(element)){ 
            return element }
    }
}