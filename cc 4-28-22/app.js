// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

/*
P:parameters R:return E:examples P:pseudocode

P: we will be expecting an integer array as an input. will the input always have integers? will the input have special characters? will the input have a NaN or a null?

R: we need to return a new array having doubled values

E:  if we are given [2,2,2] our function should return [4,4,4]
    if we are given [1,2,3,4] our function should return [2,4,6,8]
    if we are given [9,100] our function should return [18,200]

P: 
    create a function which takes in an array as a parameter

    go through the array using map and multiple each value. return the value
*/ 


let doubled = arr => {
    return arr.map(element => element*2)
}


//console log the function 
console.log(doubled([1,2,3,4],[2,4,6,8]))