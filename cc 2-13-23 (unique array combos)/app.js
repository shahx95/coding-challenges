// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: uniqueCombo[[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example uniqueCombo[[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//input will be an array of integer arrays
//output will be an integer

//examples
// uniqueCombo[[1,2],[4],[5,6]]),4)
// uniqueCombo[[1,2],[4,4],[5,6,6]]),4)
// uniqueCombo[[1,2],[3,4],[5,6]]),8)
// uniqueCombo[[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


//use logic for combinations: unique elements in arr 1 x unique elements in arr 2 x unique elements in arr 3  

const uniqueCombo = arr => arr.reduce((total,current) => total * new Set(current).size, 1)


console.log(uniqueCombo[[1,2],[4],[5,6]])