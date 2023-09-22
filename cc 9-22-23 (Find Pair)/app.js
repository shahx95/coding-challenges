//Write a function findPair(arr, target) that takes in an array of numbers arr and a target value target. The function should return an array containing the pair of numbers from the input array that add up to the target value. If no such pair is found, the function should return an empty array. Remember, the array is not necessarily sorted, and there may be multiple valid pairs. Return the first valid pair encountered.


//examples
const arr = [2, 4, 7, 11, 15];
const target = 9;

console.log(findPair(arr, target)); // Output: [2, 7]

const arr2 = [1, 3, 5, 9];
const target2 = 8;
console.log(findPair(arr2, target2));
// Output: [3, 5]

const arr3 = [2, 4, 6, 8];
const target3 = 10;
console.log(findPair(arr3, target3));
// Output: [2, 8]


//solution
function findPair(arr, target) {
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
      if (arr[left] + arr[right] === target) {
        return [arr[left], arr[right]]
      }
      left++
      right--
    }
    
    return []; // Return an empty array if no pair is found
  }
  