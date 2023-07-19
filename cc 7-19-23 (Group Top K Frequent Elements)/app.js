// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


//Solution
function topK(arr, k) {
    let count = arr.reduce((total, current) => {
      total[current] = (total[current] || 0) + 1;
      return total;
    }, {});
  
    // Initialize bucketSort with empty arrays
    let bucketSort = new Array(arr.length + 1).fill([]);
  
    for (let key in count) {
      let value = count[key];
      bucketSort[value] = [...bucketSort[value], key];
    }
  
    let result = [];
  
    // Loop until i >= k
    for (let i = arr.length; i >= k; i--) {
      result = [...result, ...bucketSort[i]];
    }
  
    return result;
  }
  