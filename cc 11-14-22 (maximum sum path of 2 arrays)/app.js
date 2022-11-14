/*
You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

Points to consider for a valid path:

A path can start from either list, and can finish in either list.
If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
Return only the maximum path sum.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. sorted. may or may not have common terms. can have multiple common terms.
R: integer
E:
[0, 2, 3, 7, 10, 12], [1, 5, 7, 8] => 35

P:
    find the common elements
    add the elements before occurence of common elements and save the greater sum in a variable called max
    add the elements between the common elements, find the greater sum for each iteration and add it to max
    add the elements after the common elements, find the greater sum between the two and add it to max
    return max
    
*/


//solution

//TODO: need to optimize the solution

function maxSumPath(arr1,arr2){
    //find common elements
   let common = arr1.filter(element => arr2.includes(element))
   
   //add elements before common elements
   let sumBeforeCommonArr1 = arr1.slice(0,arr1.indexOf(common[0])).reduce((total,current) => total+current,0)
   let sumBeforeCommonArr2 = arr2.slice(0,arr2.indexOf(common[0])).reduce((total,current) => total+current,0)
   let max = Math.max(sumBeforeCommonArr1, sumBeforeCommonArr2)
   
   //add max elements between the common elements
   for(let i=0;i<common.length-1;i++){
  max = max + Math.max(arr1.slice(arr1.indexOf(common[i]),arr1.indexOf(common[i+1])).reduce((total,current) => total+current,0),  arr2.slice(arr2.indexOf(common[i]),arr2.indexOf(common[i+1])).reduce((total,current) => total+current,0))  
 }
   //add max elements after common elements
 max = max + Math.max(arr1.slice(arr1.indexOf(common[common.length-1])).reduce((total,current) => total+current,0), arr2.slice(arr2.indexOf(common[common.length-1])).reduce((total,current) => total+current,0))
   
   return max
 }
   