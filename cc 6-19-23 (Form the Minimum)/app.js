/* 
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
*/

/* 
function accepts an array of integers. all integers will be > 0.
function returns an integer
Examples: 
        minValue ({1, 3, 1})  ==> return (13)
        minValue({5, 7, 5, 9, 7})  ==> return (579)
        minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Pseudocode: 
    first we will obtain the unique numbers since duplicates are not allowed. we can use the set constructor for this
    create an array from the set of unique numbers
    sort the numbers in ascending order and then join them. sorting by ascending will always give us the smallest number
    return after converting the joined number to a string
*/

//solution
function minValue(values){
    let arr = [...new Set(values)].sort()
    return +arr.join('')
  }
