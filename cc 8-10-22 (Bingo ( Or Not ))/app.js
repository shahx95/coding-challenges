/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers
R: string
E:
    bingo([1,2,3,4,5,6,7,8,9,10])=>"LOSE"
    bingo([21,13,2,7,5,14,7,15,9,10])=>"WIN"
P: 
    create an array of numbers corresponding to characters of "BINGO"
    use every method on the bingo array and check if each number is found in the input array
    return "WIN" if true, else return "LOSE" 
*/

//solution
function bingo(a) {
    let bingoArr = [2,9,14,7,15]
    return bingoArr.every(value => a.includes(value))?"WIN":"LOSE"
  }