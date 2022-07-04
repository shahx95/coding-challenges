/*
#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

If the array has 0 or 1 values or is null, your method should return an empty array.

*/



/*
P: parameters R: return value E: examples P: pseudocode

P: function takes an array of numbers. numbers can be positive or negative. whole or floats. 
R: an array of numbers
E:
    Input:  [ 1, 3, 5, 1, -10]
    Output:  [ 2, 4, 3, -4.5]
P:
    create an empty array stored in a variable
    check input array for null or length <= 1. if true, return empty array.
    
    iterate through the input array using a for loop until the 2nd last index
        for every iteration  take out the average of the element at index and the index+1
        push the average in the array variable
    return the array variable after iteration completes    
*/


//solution
function averages(numbers) {
    let arr = []
    if(numbers === null || numbers.length<=1) {return arr}
    for(let i=0;i<numbers.length-1;i++){
      let average = (numbers[i]+numbers[i+1])/2
      arr.push(average)
    }
    return arr
  }