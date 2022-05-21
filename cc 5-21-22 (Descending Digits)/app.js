/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  Input will be a positive integer

R:  Will return an integer

E:
        Input: 42145 Output: 54421

        Input: 145263 Output: 654321

        Input: 123456789 Output: 987654321

P:
        Convert the number to a string to allow array manipulation
        split the string to an array
        use sort to put the elements in descending order
        use join method to put the elements together in a string
        use Number method to convert the string to a number and return
*/

//solution
function descendingOrder(n){
    //...
    return Number(n.toString().split('').sort( (a,b)=> b - a ).join(''))
  }