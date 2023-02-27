/*
Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.
If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

examples:
var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

*/

//solution
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function append(listA, listB) {
    
    if(!listA) {return listB}
    if(!listB) {return listA}
    if(listA && listB) {
      let currentNode = listA
      while(currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = listB
      return listA
    }
  }