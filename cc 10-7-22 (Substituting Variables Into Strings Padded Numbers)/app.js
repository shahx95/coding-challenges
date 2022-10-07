/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  integer
R:  string
E:
    solution(5) should return "Value is 00005"
P:  
    convert argument integer to string 
    use the padStart string method to create the formatted string and prepend 'Value is ' to it
    return the formatted string
*/

//solution
const solution = value => 'Value is ' + value.toString().padStart(5, '0');