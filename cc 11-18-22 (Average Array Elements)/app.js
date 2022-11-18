/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
If the average length is not an integer, use Math.round().
The input array's length > 1
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: array of strings. array will always have atleast 2 elements. 
R: array of strings
E:
        ['u', 'y'] =>  ['u', 'y'] // average length is 1
        ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
        ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
P:
    Find the average off all the letters (don't get hung up on individual words add them all together) then map while repeating the characters the average amounts
*/

//solution
function averageArrayElements(arr){
    return Math.round(arr.reduce((total,current)=> total+current.length,0) / arr.length)
}