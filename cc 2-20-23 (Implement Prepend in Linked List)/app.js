// How will you implement a prepend function in linked lists?

//Solution
class LinkedList{
    constructor(){
        //initial linkedlist
        this.head = this.tail = null
    }

    prepend(value){
        //if linked list is empty
        if(!this.head){
            this.head = this.tail = new Node(value)
        }
        //otherwise
        else{
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }
}

class Node{
    constructor(value,next,prev){
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}