/*
Today's task is to write a function that will check equality between 2 arrays with a particular structure.

The arrays will:

Be of equal size
Will each contain some number (X) arrays
Each inner array will contain that same number (X) primitive elements
All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  array of nested arrays with primitive elements 
R:  boolean
E:
        const arr1 = [['a','b','c']['d','e','f']['g','h','i']]
        const arr2 = [['a','b','c']['d','e','f']['g','h','i']]
        const arr3 = [['a','B','c']['d','E','f']['g','H','i']]
        const arr4 = [['a','b','c']['g','h','i']['d','e','f']]
        checkEquality(arr1, arr2) => true
        checkEquality(arr1, arr3) => false
        checkEquality(arr1, arr4) => false
P:
    arrays cannot be directly compared so we need to compare their values
    since we know that inner array will only contain primitive elements equal to the number of outter arrays, we can use flat()
    after flattening both arrays, we can use every method to compare if all elements of one array equal all elements of second array at respective index
*/

//solution
const checkEquality = (arr1, arr2) => {
    let arr1Flat = arr1.flat()
    let arr2Flat = arr2.flat()
    return arr1Flat.every((character,index) => character === arr2Flat[index])
}