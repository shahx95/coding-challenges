/*
We want to generate a function that computes the series starting from 0 and ending until the given number.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  integer. positive or negative.
R:  string
E:
        sequenceSum(6) => '0+1+2+3+4+5+6 = 21'
        sequenceSum(-15) => '-15 < 0'
        sequenceSum(0) => '0 = 0'
P:  
    create a function that accepts an input integer
    create a sum variable and assign it a value of 0
    create an empty string variable
    
    check if number > 0
        create a loop from 0 till the input number
        concatenate the number to the empty string
        if iteration is not the last, we also concatenate a + to the string 
        add the number to the sum
        
        return a template literal statement
    if number < 0
        return a template literal statement
    otherwise
        return a template literal statement
*/



//solution
let sequenceSum = num => {
    let sum = 0
    let str = ""
    if(num>0){
        for(let i=0;i<=num;i++){
            str = str + i
            if(i!=num) {str = str  + "+"}
            sum = sum + i
        }
        return `${str} = ${sum}`
    }
    else if(num<0){
        return `${num} < 0`
    }
    else{
        return `0 = 0`
    }
}