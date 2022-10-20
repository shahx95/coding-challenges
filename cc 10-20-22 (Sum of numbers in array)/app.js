/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. +ve. no floats. 
R: integer
E:
    getAverage([2,2,2,2]),2)
    getAverage([1,2,3,4,5,]),3);
    getAverage([1,1,1,1,1,1,1,2]),1)
P:
    Reduce the sum and divide by the length to get the average and then round down
*/

//solution
function getAverage(arr){
    return Math.floor(arr.reduce((total,current) => total+current) / arr.length)
}