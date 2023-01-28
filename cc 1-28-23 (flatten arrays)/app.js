/*
Create a function called "flattenArray" that takes in a single parameter, an array of arrays, and returns a new, flattened array. The function should not use any built-in array methods such as .concat() or .flat().
*/

/*
Parameters:  An array of arrays
Return Value: A new, flattened array
*/

/*
Examples:
    flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
    flattenArray([[1, 2, [3]], [4, [5, 6]]]) => [1, 2, 3, 4, 5, 6]
*/

const flattenArray = arr => {
    if(! Array.isArray(arr)){return "Input must be an Array"}
    let result = []
    for(let element of arr){
        if(Array.isArray(element)){
            result = [...result,...flattenArray(element)]
        }
        else result.push(element)
    }
    return result
}