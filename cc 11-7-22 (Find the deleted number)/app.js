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
}