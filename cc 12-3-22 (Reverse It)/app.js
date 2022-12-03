/*Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method!  */


//only string as function argument. string can be uppercase/lowercase. case must be maintained. string can be empty.
//return a string

 //"Hello" => olleH
 //"UmbrellA" => "AllerbmU"


//solution

function reverseIt(str){
    //loop through string
    let strReversed = ""
    for(letter of str){
        // adding current value to previous equals a reversed string
        strReversed = letter + strReversed
    }
    return strReversed


}