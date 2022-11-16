/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers
R: array of integers
E:
    Examples
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

P:
    find all the odds using filter
    sort in decreasing order so we can pop the element from the array
    use map to keep the element or replace with odd pop
    return mapped array
*/

//solution
function sortArray(arr){
    //find all the odds
    let odd = arr.slice().filter(element => element%2)
    //sort the odds
    odd.sort((a,b) => b-a)

    return arr.map(element => element%2? odd.pop() : element) 
}