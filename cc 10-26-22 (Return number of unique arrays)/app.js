/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  arrays will always have integers. no negative integers. no floats.   
R:  integer
E:
        solve([[1,2],[4],[5,6]]),4)
        solve([[1,2],[4,4],[5,6,6]]),4)
        solve([[1,2],[3,4],[5,6]]),8)
        solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)    
P:  iterate through the array using reduce
        for each nested array, get a unique array through Set and find its size using size method
        multiple total accumulator value with size and reassign accumulaor 
         
*/

//solution
const uniqueArrs = arr => arr.reduce((total,current) => total*(new Set(current).size),1)