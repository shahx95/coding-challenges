// Question:
// Write a function that takes an array of integers and returns the sum of the two largest integers in the array.

    // Input: an array of integers, [a1,a2,a3,....an] where (1<=n<=10^3) and (-10^3<=ai<=10^3)
    // Output: an integer
    // If the array is empty or has only one element, return 0
    // If the array has only two elements, return the sum of the two elements

/*
Examples:
Input: [1, 2, 3, 4, 5]
Output: 9

Input: [1, 2]
Output: 3

Input: [-1, -2, -3]
Output: -3

Input: []
Output: 0
*/

/*
Time complexity: O(n) where n is the number of elements in the array
Space complexity:  O(1)
*/

//Solution:

function sumOfTwoLargest(arr) {
    if(arr.length < 2) {
      return 0;
    }
    let max1 = 0;
    let max2 = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
      } else if(arr[i] > max2) {
        max2 = arr[i];
      }
    }
    return max1 + max2;
  }
  