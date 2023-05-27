/*
Write a function called "uniqueElements" that takes an array as an argument and returns a new array containing only the unique elements from the original array. The order of the elements in the resulting array should be maintained.
*/

//solution
function uniqueElements(arr) {
    let hashObj = {};
    return arr.filter(element => {
      if (!hashObj[element]) {
        hashObj[element] = true;
        return element;
      }
    });
  }

//alternate solution
function uniqueElements(arr) {
return [...new Set(arr)];
}
  


//examples
uniqueElements([1, 2, 3, 4, 4, 2, 1, 5]); // should return [1, 2, 3, 4, 5]
uniqueElements(['a', 'b', 'c', 'b', 'a', 'd']); // should return ['a', 'b', 'c', 'd']
