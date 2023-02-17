/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

//function takes an array of integers and outputs an integer value


//examples
console.log(evenLast([2, 2, 2, 2]), 8);
console.log(evenLast([]), 0);
console.log(evenLast([1, 3, 3, 1, 10]), 140);
console.log(evenLast([2, 3, 4, 5]), 30);

//use reduce to get the sum of even numbers and then multiply the sum by the last value in the array

//time complexity of o(n) where n is number of integers in the input array
//space complexity of o(1) because lastIndex and total take constant space and do not depend on the size of the input array


//solution
function evenLast(numbers) {
    // what is an even number? number%2 === 0
    if(!numbers.length){return 0}
    const lastIndex = numbers[numbers.length-1]
    return numbers.reduce((total,current,index) => {
      if(index%2===0){
        return total+=current
      }
      else{
        return total
      }
    }, 0) * lastIndex

  }