/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

//solution
function isBalanced(str){
    const obj = {
                    "}":"{",
                    ")":"(",
                    "]":"["
                }
    const stack = []
    for(let i=0;i<str.length;i++){
        //if closing bracket
        if( stack.length > 0 && ( stack[stack.length - 1] === obj[str[i]] ) ){
            stack.pop()
        }
        //else if opening bracket
        else if(!stack.length || stack[stack.length-1] !== obj[str[i]]){
            stack.push(str[i])
        }
        else return false
    }
    
    return stack.length === 0 //if anything remains in stack after iteration completes, str is unbalanced
}


//The time complexity of this algorithm is also O(n), where n is the length of the input string. 
//The space complexity of this algorithm is O(n), where n is the length of the input string.