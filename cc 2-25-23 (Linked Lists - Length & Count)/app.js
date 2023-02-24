// Linked Lists - Length & Count

// Implement Length() to count the number of nodes in a linked list.
// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3

// Implement Count() to count the occurrences of an integer in a linked list.
// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4




//solution
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    let l = 0
    let currentNode = head
    while(currentNode){
      l++
      currentNode = currentNode.next
    }
    return l
  }
  
  function count(head, data) {
    let c = 0
    let currentNode = head
    while(currentNode){
      if(currentNode.data === data){c++}
      currentNode = currentNode.next
    }
    return c
  }