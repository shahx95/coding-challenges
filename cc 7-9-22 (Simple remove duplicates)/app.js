/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
*/

/*
P: parameters R: return values E: examples P: pseudocode

P: array of integers.
R: array of integers.
E:
    solve([3, 4, 4, 3, 6, 3])=>[4, 6, 3]
P: 
    use the Set object to get the unique values but reverse the array first to keep the last elements
    after obtaining the unique values again reverse the array to restore the original order

*/


//solution
function solve(arr) {
    let uniqueArray = [...new Set(arr.reverse())]
    
    return uniqueArray.reverse();
  }