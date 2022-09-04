/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string of integers
R: string
E:
    binaryToString('0100100001100101011011000110110001101111') => 'Hello'
P: 
    create a counter that keeps track of every 8 digits
    create a temp str and a result str variable initilized as empty strings

    iterate through the input binary string
        add each digit to the temp str
        increase count by 1
        if count reaches 8
            convert temp str digits using parseInt and fromCharCode
            add the conversion to result 
            reset counter to 0
    
    after iteration completes, return the result string        
*/
//solution
function binaryToString(binary) {
    let count = 0
    let str = ""
    let result =""
    for(let digit of binary){
      str+=digit
      count++
      if(count===8){
        console.log(str)
        result+=String.fromCharCode(parseInt(str,2))
        count=0
        str=""
      }
      
    }
    return result
  }