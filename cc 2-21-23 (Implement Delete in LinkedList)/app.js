//How will you implement deleteHead and deleteTail functions in a linkedlist?

//solution
class LinkedList{
    constructor(){
        this.head = this.tail = null
    }

    deleteHead(){
        let removedNode 
        //if list is empty
        if(!this.head){
            removedNode = null
        }
        else{
            //if list only has 1 node
            if(this.head === this.tail){
                removedNode = this.head
                this.head = this.tail = null
            }
            else{
                //if list has multiple nodes
                removedNode = this.head
                this.head = this.head.next
                this.head.prev = null
            }
        }

        return removedNode
    }

    deleteTail(){
        let removedNode 
        //if list is empty
        if(!this.tail){
            removedNode = null
        }
        else{
            //if list only has 1 node
            if(this.head = this.tail){
                removedNode = this.tail
                this.head = this.tail = null
            }
            else{
                //if list has multiple nodes
                removedNode = this.tail
                this.tail = this.tail.prev
                this.tail.next = null
            }
        }

        
        return removedNode

    }
}

class Node{
    constructor(value,next,prev){
        this.value = value
        this.next = next || null
        this.tail = prev || null
    }
}