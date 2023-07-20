// Write a function called findDuplicates that takes an array of integers as input and returns an array containing all the duplicate elements in the input array.

// For example:
findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 7]) // Output: [2, 3, 7]
findDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]) // Output: [1, 2, 3, 4, 5]
findDuplicates([10, 20, 30, 40, 50]) // Output: []


//solution
function findDuplicates(arr) {
    const duplicates = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  
    return duplicates;
  }

//   This approach has a time complexity of O(n^2) since the indexOf and lastIndexOf methods have a linear time complexity. 
// It has a space complexity of O(k), where k is the number of duplicate elements in the array, since we are only storing the duplicate elements in the duplicates array.  

function findDuplicates2(arr) {
    const duplicates = [];
    const countMap = new Map();
  
    for (const num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
      if (countMap.get(num) === 2) {
        duplicates.push(num);
      }
    }
  
    return duplicates;
  }

//This solution has a time complexity of O(n) since it iterates through the array once, and a space complexity of O(n) due to the hash map used to store the counts.
// By using this hash map approach, you avoid the need to check both the first and last index of each element, which makes the solution more efficient.