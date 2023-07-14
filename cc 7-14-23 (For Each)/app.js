/*
Write a function count that takes an array and a callback function, then returns the number of elements where callback returns true. Use .forEach to iterate through the array.

A hint: you'll need a variable outside the .forEach loop to keep track of the element count. Remember to return it at the end!
*/

//solution
function count(arr, callback) {
    let count = 0;
  
    arr.forEach(element => {
      if (callback(element)) {
        count++;
      }
    });
  
    return count;
  }
  