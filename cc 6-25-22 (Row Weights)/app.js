/*
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Array size is at least 1.
All numbers will be positive.
*/


/*
P: parameters R: return value E: examples P: pseudocode
P: function accepts an array of positive integers
R: function returns an array of integers
E:
        rowWeights([13, 27, 49])  ==>  return (62, 27)
        rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
        rowWeights([80])  ==>  return (80, 0)

P:
    apply reduce method with a [0,0] array as total initial value
    in every iteration, add value to the total array wrt index position
    return the array

*/


//solution
function rowWeights(array){
    return array.reduce( (total,currentVal,index) => (total[index%2]+=currentVal,total)[0,0])
}


