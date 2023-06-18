/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.
*/


//solution 
class MinStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }

    push(val){
        this.stack.push(val)
        this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1] || val ))
    }

    pop(){
        this.stack.pop()
        this.minStack.pop()
        
    }
    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}
//The code implements the required functionality with O(1) time complexity for each method

//example
const minStack = new MinStack();  // Create a new MinStack instance

minStack.push(-2);  // Push -2 onto the stack
minStack.push(0);   // Push 0 onto the stack
minStack.push(-3);  // Push -3 onto the stack

minStack.getMin();  // Retrieve the minimum element from the stack, which is -3
// Output: -3

minStack.pop();     // Pop the top element from the stack, which is -3
minStack.top();     // Retrieve the top element from the stack, which is 0
// Output: 0

minStack.getMin();  // Retrieve the minimum element from the stack, which is -2
// Output: -2
