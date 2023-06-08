/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/


console.log(productArr([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productArr([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

function productArr(numArr) {
  const n = numArr.length;
  const result = Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= prefix;
    prefix *= numArr[i];
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= numArr[i];
  }

  return result;
}
