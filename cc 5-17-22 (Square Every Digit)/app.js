/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: The function accepts an integer only. All other input types should be invalid.
R: The function returns an integer.
E:
    squareDigits(345) => 91625
    squareDigits(12) => 14
    squareDigits(0) => 0
    squareDigits('345') => 'Invalid input'
P:
    convert the number to a string
    split the string to an array
    use array method to double each element
    join the array and convert to a number
    return the number
*/

//solution
function squareDigits(num){
    if(typeof(num) === 'number'){
        let numToArray = num.toString().split('')
        let squareElement = numToArray.map( element => element*element )
        let arrayToNum = Number(squareElement.join(''))
        return arrayToNum;
    }
    else{
        return 'Invalid input'
    }
  }