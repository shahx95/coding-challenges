/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: Integer. >=0.
R: Integer
E:
        digits(9) => 1
        digits(66) => 2
        digits(128625) => 6
P:  
    check if integer is 0. return 1 in this case.
    create a counter variable and set it to 0
    create a while loop until integer becomes 0
        for every interation divide by 10 and floor the remainder
        increase the counter by 1
    return the counter    
*/


//solution
function digits(n) {
    if(n===0) {return 1}
    
    let digits = 0
    while(n!=0){
      n = Math.floor(n/10)
      
      digits++
  }
    return digits
  }

// another way is to convert the input to string and return its length