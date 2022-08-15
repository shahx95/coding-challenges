/*
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: start and end values. 0 < start <= end. only integers. 
R: array of integers.
E:
    For start = 125, and end = 132 function returns [1,9,6,3,0,1,1,1,1,1]
P:
    create an array arr with length of 10 for digits 0-9
        initialize the array with 0s. the array will be used to as frequency counter
    create a for loop from start to end inclusive
        for each value, convert it into a string
            then use spread operator within an array
            use ForEach method to access each digit
            everytime a digit is accessed, the respective index for arr is increased by one
    after the for loop concludes, return arr        

*/

//solution
var paintLetterboxes = function(start, end) {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i=start;i<=end;i++){
      [...String(i)].forEach(digit => arr[+digit]++)
    }
    return arr
  }