/*
Write a function that takes an array of integers as input and returns the longest consecutive sequence of numbers within the array. For example, given the input array [1, 3, 5, 2, 4, 6, 8, 9, 10], the function should return [1, 2, 3, 4, 5, 6].

Here are some additional requirements and constraints for this challenge:

The function should have a time complexity of O(n), where n is the length of the input array.
The input array may contain duplicate values, but the output sequence should not include duplicates.
If there are multiple longest consecutive sequences within the input array, the function should return the one that appears first.
If the input array is empty, the function should return an empty array.
*/


//attempt 1 - bruteforce
function findLongestConsecutiveSequence(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    // Sort the input array in ascending order
    arr.sort(function(a, b) {
      return a - b;
    });
  
    // Initialize variables to keep track of the current sequence and the longest sequence
    let currentSequence = [arr[0]];
    let longestSequence = [arr[0]];
  
    // Iterate through the sorted array
    for (let i = 1; i < arr.length; i++) {
      // If the current number is part of the consecutive sequence, add it to the current sequence
      if (arr[i] === currentSequence[currentSequence.length - 1] + 1) {
        currentSequence.push(arr[i]);
      }
      // If the current number is not part of the consecutive sequence, update the longest sequence and reset the current sequence
      else {
        if (currentSequence.length > longestSequence.length) {
          longestSequence = currentSequence;
        }
        currentSequence = [arr[i]];
      }
    }
  
    // Check if the current sequence is longer than the longest sequence
    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence;
    }
  
    return longestSequence;
  }
  