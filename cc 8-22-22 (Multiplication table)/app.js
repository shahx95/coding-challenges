/*
Your task, is to create NxN multiplication table, of size provided in parameter.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer
R: array of arrays
E:
    3 =>  [[1,2,3],[2,4,6],[3,6,9]]
P:
    create an empty array arr
    create a for loop from 1 to size
        use Array.from method to create an array of length equal to input and pass a callback function that multiplies each iteration with 
        index+1.
        push array created by Array.from in arr
    return arr
*/

//solution
multiplicationTable = function(size) {
    let arr = []
    for(let i=1;i<=size;i++){
      arr.push(Array.from({length: size}, (_, j) => i* (j + 1)))
    }
    return arr 
  }