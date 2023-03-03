// Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

// examples
// sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)


//time complexity of O(n)  space complexity of O(1)

// solution - brute force solution, may have room for further optimization using binary search 
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function sortedInsert(head, data) {
    
    //empty list
    if(!head) {
      head = new Node(data);
      return head;
    }
    
    let currentNode = head;
    
    //new head
    if(currentNode.data > data) {
      let newNode = new Node(data);
      newNode.next = currentNode;
      head = newNode;
      return head;
    }
    
    while(currentNode.next) {
      //any middle value > data
      if(currentNode.next.data > data) {
        let newNode = new Node(data);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return head;
      }
      currentNode = currentNode.next;
    }
    
    //new tail
    let newNode = new Node(data);
    currentNode.next = newNode;
    return head;
  }