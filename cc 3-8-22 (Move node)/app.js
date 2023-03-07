// Linked Lists - Move Node

// Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.

// MoveNode() is a handy utility function to have for later problems.

// JavaScript example
// var source = 1 -> 2 -> 3 -> null
// var dest = 4 -> 5 -> 6 -> null
// moveNode(source, dest).source === 2 -> 3 -> null
// moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null

//solution
function Node(data, nxt = null) {
    this.data = data, this.next = nxt;
  }
  function Context(source, dest) {
    this.source = source, this.dest = dest;
  }
  function moveNode(source, dest) {
    if(!source) throw "Error"
    return new Context(source.next, new Node(source.data, dest));
  }