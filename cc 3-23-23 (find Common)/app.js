//Write a function that takes in two arrays of integers and returns an array of unique integers that are present in both input arrays.

//function takes two arrays of integers 
//function returns an array of unique shared integers


//examples
findCommon([1, 2, 3, 4, 5], [4, 5, 6, 7]) // [4, 5]
findCommon([1, 2, 3], [4, 5, 6]) // []
findCommon([1, 2, 3, 4], [4, 5, 6, 7]) // [4]

//solution
function findCommon(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const intersection = new Set([...set1].filter(x => set2.has(x)))
    return [...intersection]
  }

//The space complexity of the function is O(n)  where n is the size of the intersection set, since the function creates three sets, each with a size proportional to the input arrays.
//The time complexity of the function is O(m + n), where m and n are the sizes of the input arrays arr1 and arr2  
  