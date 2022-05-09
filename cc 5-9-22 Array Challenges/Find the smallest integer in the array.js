/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes an array as an input. no other input type will be provided as mentioned in the challenge.
R: return an integer value 
E: 
    [78,56,232,12,8] => 8
    [78,56,232,12,18] => 12
    [1,56,232,12,8] => 1
P: 
    two easy ways to solve this. we can use sort or Math.min 
    a class structure is already provided to us
    going to try with Math.min with a spread operator [...] to breaks apart the array in individual elements 
    return the Math.min value

*/
// Solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
