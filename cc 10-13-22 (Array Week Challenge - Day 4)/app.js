/*
Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.
Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

Oh, and go ahead and mutate the given array. We're livin' on the wild side!
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  character string and an array
R:  array
E:
        myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

        // call move up function with 'h' and myGrid
        console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

        // call move up function again, same arguments
        console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

        // call move up function again, same arguments
        // Note that 'h' is already as far left as it can go
        console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

        // call move down function this time, with 'f' and myGrid as arguments
        console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

        // call move down function again, same arguments
        // Note that 'f' is already as far down as it can go
        console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

P:
    find the index of the array containing the letter
    if index is 0 (moveup) or length-1 (movedown), return original array and exit
    find the index of the letter within the containing array
    
*/

//solution
function moveup(letter,arr){
    let idx = arr.findIndex((element) => element.includes(letter))
    if(idx === 0){return arr}
    
    let position = arr[idx].indexOf(letter)
    let temp = arr[idx-1][position]
    arr[idx-1][position] = letter
    arr[idx][position] = temp
    return arr
}

function movedown(letter,arr){
    let idx = arr.findIndex((element) => element.includes(letter))
    if(idx === arr.length-1){return arr}
     
    let position = arr[idx].indexOf(letter)
    let temp = arr[idx+1][position]
    arr[idx+1][position] = letter
    arr[idx][position] = temp
    return arr
}