/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: an array of integers. 
R: integer<10. if integer>10, return last digit.
E:
        [1, 2, 3]  -->  [2, 4, 6]   

        [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]   
                                             
P:
    apply map on the input array
    for each element, add index value + 1 to the element
    if there is no element, map will return an empty array
    return map's result
*/

//solution

function incrementer(nums) { 
    return nums.map( (element,index) => (element+index+1)%10 )
  }