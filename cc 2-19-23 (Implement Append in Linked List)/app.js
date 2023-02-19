//how will you implement append function in doubly linked lists?


//solution
class LinkedList {
    constructor(){
        this.head = this.tail = null
    }

    //add to end of list / tail
    append(value){
        //if list is empty
        if(!this.tail){
            this.head = this.tail = new Node(value)
        }
        //else 
        else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.previous = oldTail
        }
    }
}

class Node {
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null //default value of null
        this.next = next || null //default value of null
    }
}