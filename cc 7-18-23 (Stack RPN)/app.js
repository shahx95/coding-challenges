/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

    The valid operators are '+', '-', '*', and '/'.
    Each operand may be an integer or another expression.
    The division between two integers always truncates toward zero.
    There will not be any division by zero.
    The input represents a valid arithmetic expression in a reverse polish notation.
    The answer and all the intermediate calculations can be represented in a 32-bit integer.

*/

//example
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6


//solution
function rpn(arr){
    let stack = []
    for(let element of arr){
        console.log(stack)
        if (isNaN(element)) {
            if (element === "+") {
                stack.push(+stack.pop() + +stack.pop());
            } else if (element === "*") {
                stack.push(+stack.pop() * +stack.pop());
            } else if (element === "-") {
                let num2 = +stack.pop();
                let num1 = +stack.pop();
                stack.push(num1 - num2);
            } else {
                let num4 = +stack.pop();
                let num3 = +stack.pop();
                stack.push((num3 / num4));
            }
        } else {
            stack.push(element)
        }
    }
        
 
    
    return stack.pop()
}

//time and space complexity of O(n)