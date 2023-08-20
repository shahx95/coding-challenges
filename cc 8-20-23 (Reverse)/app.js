/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

/*
E:
    "I really hope it works this time..." => "I yllaer hope ti works siht time..."
    "Reverse this string, please!" => "Reverse siht string, !esaelp"
    "   " => ""
P:
    split the input string by space
    apply map on the splitted string array
        for each element, if the element is in an odd index, reverse the element by using reverse() method
                           else return the element as it is
    join the returned map array by space to create a string
    trim the string returned after joining to remove any whitespaces and return the result                        
*/

//solution
function reverse(str){
    return str.split(" ").map((e,i) => i%2?[...e].reverse().join(""):e).join(" ").trim()
  }