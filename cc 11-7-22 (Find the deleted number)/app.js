/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: only integers or an empty array. 
R: integer
E:
        findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
        findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
        findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
P:
    use filter to which element in first array matches is not in the second array
        return the element
    if no such element is found return 0
*/

//solution
function findDeletedNumber(arr1,arr2){
    return arr1.filter(element => arr2.indexOf(element) === -1)[0] || 0
    // filter with indexOf has complexity of O(n^2)
}

//a better solution
function findDeletedNum(arr1,arr2){
    //if arrays are of equal length, there is no deleted so return 0
    if(arr1.length === arr2.length){return 0}
    else{ //reduce both the argument arrays and return their difference
        return arr1.reduce((total,current) => total+current, 0) - arr2.reduce((total,current) => total+current, 0)
    }
    //now complexity reduces to constant time O(1) if base case is true, else O(n) 
}