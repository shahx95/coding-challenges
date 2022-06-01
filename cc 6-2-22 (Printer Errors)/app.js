/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/


/*
P: parameters R: return E: examples P: pseudocode

P: function accepts a string of letters. string length is >= 1. 
R: function returns a string 
E:
        s="aaabbbbhaijjjm"
        printer_error(s) => "0/14"

        s="aaaxbbbbyyhwawiwjjjwwm"
        printer_error(s) => "8/22"
P:
    create an array of letters called alphabet
    create a counter
    split the input string into an array and apply a array loop
    loop over every string character and compare it to the index value of letter in alphabet array
    if index value > m index value increase the counter
    return counter over string length as a string template 

*/


//solution
function printerError(s) {
    // your code
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //a-m: index 0 till index 12 inclusive
  let count = 0
  s.split('').forEach( character => alphabet.indexOf(character)>12?count++:count)
  return `${count}/${s.length}`
}


//refactoring
//can do direct character comparison 
function printerError(s) {
  let count = 0
  s.split('').forEach( character => character>"m"?count++:count)
  return `${count}/${s.length}`
}