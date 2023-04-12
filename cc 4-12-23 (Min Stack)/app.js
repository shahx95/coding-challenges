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

class MinStack {
  constructor() {
    this.stack = []; // main stack to store elements
    this.minStack = []; // auxiliary stack to store minimum elements
  }

  push(val) {
    this.stack.push(val); // push element onto main stack

    // If the minStack is empty or the current value is less than or equal to the top of minStack, push the value onto minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    // If the main stack is not empty and the top of main stack is equal to the top of minStack, pop the element from minStack
    if (this.stack.length > 0 && this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    // Pop the element from the main stack
    this.stack.pop();
  }

  top() {
    // Return the top element of the main stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Return the top element of the minStack which stores the minimum element
    return this.minStack[this.minStack.length - 1];
  }
}
