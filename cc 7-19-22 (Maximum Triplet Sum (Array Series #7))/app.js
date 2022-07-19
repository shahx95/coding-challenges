/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. 
R: integer
E:
        maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
        maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
        maxTriSum ({3,2,6,8,2,3}) ==> return (17)
P:
    use the Set object to create an array of unique values since duplicates are not allowed
    sort the unique values in ascending order
    slice the last three values
    apply the reduce method on the sliced array to get the sum
    return the sum 
*/

//solution
function maxTriSum(numbers){
    return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((total,currentVal) => total+currentVal);
  }
