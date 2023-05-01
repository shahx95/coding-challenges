//reverse a LinkedList

class LinkedList{
    constructor(){
        this.head = this.tail = null
    }

    append(val){
        if(! this.tail){
            this.head = this.tail = new Node(val)
        }
        else{
            let oldTail = this.tail
            this.tail = new Node(val)
            oldTail.next = this.tail
        }
    }

    reverse(){
        let current = this.head
        let prev = null
        let reverseTail = this.head
        while(current){
            let temp = current.next
            current.next = prev
            prev = current
            current = temp
        }
        this.head = prev
        this.tail = reverseTail
        return prev
    }
}

class Node{
    constructor(val, next){
        this.value = val
        this.next = next || null
    }
}

const exampleList = new LinkedList()
exampleList.append(1)
exampleList.append(2)
exampleList.append(3)
console.log(exampleList)
exampleList.reverse()
console.log(exampleList)