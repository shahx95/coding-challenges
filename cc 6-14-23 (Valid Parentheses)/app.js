/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

*/

/*
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/


//solution
function validParentheses(str){
    let stack = [] //filo
    let parenthesesObj = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    for(let character of str){
        //if closing bracket
        if(parenthesesObj[character]){
            if(stack.length>0 && parenthesesObj[character] === stack[stack.length-1]){
                stack.pop()
            } else { //if closing bracket comes before opening it will never be valid
                return false
            }
        } else {
        //if opening bracket
        stack.push(character)
        }
    }
         
    if(stack.length > 0) {
        return false
    } else {
        return true
    }
}