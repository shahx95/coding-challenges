/*
So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.
Some things to note:

If the given value is on the edge of the array and can't move in that direction, don't move it.
The array passed in should be mutated by this function. Scandalous, I know.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: a primitive and an array. (Edge case what if there are two or more similar values? no clarification provided in the challenge)
R: array
E:
        myArray = ['abc', 'xyz', 1, 2, 'Hey!']
        moveLeft('xyz',myArray) => ['xyz', 'abc', 1, 2, 'Hey!'] call move left function with 'xyz' and myArray as arguments
        moveLeft('xyz',myArray) => ['xyz', 'abc', 1, 2, 'Hey!'] 'xyz' is already as far left as it can go
        moveRight(2,myArray) => ['xyz', 'abc', 1, 'Hey!', 2] call move right function this time, with 2 and myArray as arguments

P:
    check if primitive is not on the start (moveLeft) or the end (moveRight). if it is, then just return the array as is
    otherwise swap with index-1 (moveLeft) or index+1 (moveRight) 
    return the array
*/

//solution
function moveLeft(primitive,arr){
    let idx = arr.indexOf(primitive)
    if(idx===0){return arr}
    else{
        arr[idx] = arr[idx-1]
        arr[idx-1] = primitive
    }
    return arr
}

function moveRight(primitive,arr){
    let idx = arr.indexOf(primitive)
    if(idx===arr.length-1){return arr}
    else{
        arr[idx] = arr[idx+1]
        arr[idx+1] = primitive
    }
    return arr
}