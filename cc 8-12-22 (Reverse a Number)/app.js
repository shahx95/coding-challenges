/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. +ve or -ve.
R: integer. +ve or -ve.
E:
        123 ->  321
        -456 -> -654
        1000 ->    1
P:
    convert the number to an array
    reverse the array
    if the last array element is a negative sign
        pop it out
        unshift the negative to the front
    join the array to a string
    convert to Number and return   
*/

//solution

function reverseNumber(n) {
    let arr = [...String(n)].reverse()
    if(arr[arr.length-1]==="-"){
      arr.pop()
      arr.unshift("-")
    }
    return Number(arr.join(""))
  }