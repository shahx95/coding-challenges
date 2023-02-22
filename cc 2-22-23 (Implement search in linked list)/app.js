//How will you implement a search function in a linkedlist?

//solution
class LinkedList {
    constructor(){
        this.head = this.tail = null
    }

    search(value){
        //empty linked list
        if(!this.head){
            return null
        }
        
        let currentNode = this.head //start search from head
        while(currentNode.value !== value){
            if(currentNode.value === value){ //match found
                return currentNode
            }
            currentNode = currentNode.next //if no match found, move to next node
        }

        return null //if value not in linked list, return null
    }
}

class Node {
    constructor(value,next,prev){
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}