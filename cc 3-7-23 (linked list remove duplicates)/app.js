/*
Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.
*/

//example
//var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
// removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null


// time complexity of O(n) since we need to traverse all the n number of nodes in  the linked list
// space complexity of o(1) since we are only storing a constant space of data in our variables next and currentNode

//solution
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function removeDuplicates(head) {
    console.log(head)
    if(head==null){return null}
    
    let next = null
    
    let currentNode = head
    
    while(currentNode.next !== null){
      if(currentNode.data === currentNode.next.data){
        next = currentNode.next
        currentNode.next = next.next
        next.next = null
      }
      else{
        currentNode = currentNode.next
      }
    }
    
    console.log(head)
    return head
  }