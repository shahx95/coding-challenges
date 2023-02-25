/*
Linked Lists - Get Nth
Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception (ArgumentException in C#, InvalidArgumentException in PHP, Exception in Java).
*/

//examples
// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2

//time complexity: O(n) because the function iterates through the linked list  until it reaches the node at the specified index or the end of the list. 

//space complexity: O(1) because the function only uses a constant amount of extra space to store two variables (count and currentNode) and does not depend on the size of the linked list

//solution
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    let count = 0;
    let currentNode = node;
    
    while(currentNode) {    
      if(count === index) {
        return currentNode;
      }
      
      count++;
      currentNode = currentNode.next;
    }
    
    throw new Error('Invalid node at ' + index) 
  }