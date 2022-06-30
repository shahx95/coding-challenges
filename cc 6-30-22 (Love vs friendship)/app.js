/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

/*
P: parameters R: return values E: examples P: pseudocode

P: function accepts a string
R: function returns an integer
E:
        wordsToMarks("attitude") => 100
        wordsToMarks("friends") => 75
        wordsToMarks("knowledge") => 96
P:
    we make use of the asci chart. we know that in the asci chart lowercase a is the 97th value 
    to make a as 1 we subtract 96 from the character code value
    we convert the string to an array
    loop through each array element using reduce
    initialize total as 0
        for each element check the character code and subtract 96 from it
        add the subtracted value to the total
    return the total after reduce ends    
*/


//solution
function wordsToMarks(string){
     
    //asci for a is 97 so 97-96 =1 
    return [...string].reduce( (total,element)=> total+element.charCodeAt(0)-96, 0 )
  }