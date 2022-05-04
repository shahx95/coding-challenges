/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

/*
P: parameters R: return E: example P: pseudocode

P: the function takes in an array and a value. the array and the value can be of any type

R: the function returns true if the value is in the array and false if otherwise

E: 
    ([1,2,3,4], 3) => true 
    ([1,2,4,5], 3) => false

P: create a function with two parameters for array and value each
    use the .includes() method and return the result
*/


function include(arr, item){
    return arr.includes(item);
  }