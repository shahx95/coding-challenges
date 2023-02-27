/*
Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list

You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.


examples:
insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
*/


//solution
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function insertNth(head, index, data) {
    // Your code goes here.
    console.log(head)
    if(index===0){
      if(head===null){
        head = new Node(data)
        return head
      }
      else{
        let insertion = new Node(data)
        insertion.next = head
        this.head = insertion
        return insertion
      }
    }
    let currentNode = head
    let currentIndex = 0
    while(currentNode){
      if(currentIndex === index-1){
        let oldNode = currentNode
        currentNode = new Node(data)
        currentNode.next = oldNode.next
        oldNode.next = currentNode
        console.log(head)
        return head
      }
      else{
        currentIndex++
        currentNode = currentNode.next
      }
    }
    
    throw new Error("Invalid Index")
  }
  