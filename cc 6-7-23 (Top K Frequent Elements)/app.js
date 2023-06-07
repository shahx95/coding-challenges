/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

console.log(topKFrequentElements([1,1,1,2,2,3], 2),[1,2])
console.log(topKFrequentElements([1], 1),[1])

//edge cases that come to my mind
//what if the input array is empty?
//what if k is 0?

//bruteforce method
function topKFrequentElements(nums, k) {
    const frequencyMap = {};
    
    // Count the frequency of each element
    for (let num of nums) {
      frequencyMap[num] = frequencyMap[num] + 1 || 1;
    }
    
    // Sort the elements based on their frequency in descending order
    const sortedElements = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
    
    // Return the k most frequent elements
    return sortedElements.slice(0, k);
  }
  