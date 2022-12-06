/*
Given an array and a size, split the array items into a list of arrays of the given size.
*/

//argument array will never be empty? size will always be greater than 0?

//return an array

/*
use the built-in slice method
with a while loop or a for loop that increments by steps of the given size
*/

//solution
const _chunk = (array, size) => {
    const chunks = [];
    let index = 0;
  
    while (index < array.length) {
      chunks.push(array.slice(index, index + size));
      index += size;
    }
}
  
  