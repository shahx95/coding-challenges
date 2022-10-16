/*
Recursion is a programming technique in which the intention is to reduce the problem into smaller instances of the same problem until it is completely solved. In this challenge, write a function that reverses a string by calling itself repeatedly.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  string
E:  
    reverseString("hello") => "olleh"
P:
    if the string is empty, return it
    else
        take out the first character
        call the function and prepend it to the first character
*/

//solution
function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}