/*
This is a two part challenge. You are tasked with implementing a calculator using a stack data structure. The calculator should be able to evaluate arithmetic expressions and provide the correct result.

Instructions:

Part 1: Create a Stack class that supports the following methods: push, pop, peek, and isEmpty.
Part 2: Implement a function called calculate which takes an arithmetic expression as input and returns the calculated result.
The arithmetic expression can include the following operations: addition (+), subtraction (-), multiplication (*), and division (/). The expression may also contain parentheses for grouping.
The calculator should follow the standard operator precedence rules: multiplication and division take precedence over addition and subtraction. Parentheses can be used to override the precedence.
The calculator should handle both integer and floating-point numbers.
Example:
calculate("3 + 4 * 2 - ( 5 / 2 )")
Expected output: 9.5

Note: Feel free to use the built-in Array as the underlying data structure for your stack implementation. The focus of this challenge is on algorithmic thinking and stack usage rather than implementing a custom stack class.
*/

//create Stack class
class Stack{
    constructor(){
        this.elements = []

    }
    
    push(element){
        this.elements.push(element)
    }

    pop(){
        if(this.elements.length > 0){
            return this.elements.pop()
        } else {
            throw new Error ("Stack is empty")
        }
    }

    peek(){
        if(this.elements.length > 0){
            return this.elements[this.elements.length - 1]
        } else {
            throw new Error ("Stack is empty")
        }
    }

    isEmpty(){
        return this.elements.length === 0
    }
}

