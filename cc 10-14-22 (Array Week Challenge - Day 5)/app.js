/*
Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: 2D array. inner arrays will only have primitive values. array can be empty. we will only be provided with an array as an argument. 
R: 2D array
E:
[[1,2,3],[4,5,6],[7,8,9]] => [[4,5,6],[7,8,9],[1,2,3]]
[] => []

P:
   check if array is empty and return array as is if true
   otherwise start with shuffling
    use nested for loops, with i for number of elements in the main array and k for number of elements within each element
        loop will run for array.length * 2 times
        in each iteration a random value for i and k will be generated using Math.random()
        array[i][k] will get the random values and the random indices will get value for array[i][k] 
    return array    
*/


//solution
function shuffle(arr){
    if(arr.length === 0){return arr}
    let randomI = 0, randomK = 0
    for(let i=0;i<=arr.length-1;i++){
        for(let k=0;k<=arr.length-1;k++){
            randomI = Math.floor(Math.random() * (arr.length-1))
            randomK = Math.floor(Math.random() * (arr.length-1))
            let temp = arr[i][k]
            arr[i][k] = arr[randomI][randomK]
            arr[randomI][randomK] = temp

            // [arr[i][k],arr[randomI][randomK]]=[arr[randomI][randomK],arr[i][k]]
        }
    }
    return arr
}