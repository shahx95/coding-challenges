/*
You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. no floats. no special characters. 
R: integer 
E:
        repeats([4,5,7,5,4,8]),15)
        repeats([9, 10, 19, 13, 19, 13]),19)
        repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
        repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
        repeats([5, 10, 19, 13, 10, 13]),24)
P:
    apply reduce method on the input array and only add to the accumulator if value is unique
    condition for value unique is indexOf === lastIndexOf
*/

//solution
function repeats(arr){
    return arr.reduce((accumulator,current) => {
        if(arr.indexOf(current)===arr.lastIndexOf(current)){
            accumulator += current
        }
        return accumulator
    },0)
}