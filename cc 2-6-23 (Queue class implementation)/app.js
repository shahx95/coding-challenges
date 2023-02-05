//Implement javascript queue using class

class Queue{
    constructor(){
      //properties
      this.storage = {}
      this.head = 0
      this.tail = 0
    }
    
    //methods:
    
    //enqueue
    enqueue(element){
      this.storage[this.tail]=element
      this.tail++
    }
  
    //dequeue
    dequeue(){
      const returnVal = this.storage[this.head]
      delete this.storage[this.head]
      this.head++
      return returnVal
    }
  }
  
  let shoppers = new Queue
  shoppers.enqueue("Habib")     //Queue { storage: { '0': 'Habib' }, head: 0, tail: 1 }
  shoppers.enqueue("Arslan")    //Queue { storage: { '0': 'Habib', '1': 'Arslan' }, head: 0, tail: 2 }
  shoppers.enqueue("Shah")      //Queue { storage: { '0': 'Habib', '1': 'Arslan', '2': 'Shah' }, head: 0, tail: 3 }
  shoppers.dequeue()            //Queue { storage: { '1': 'Arslan', '2': 'Shah' }, head: 1, tail: 3 }
  shoppers.dequeue()            //Queue { storage: { '2': 'Shah' }, head: 2, tail: 3 }
  shoppers.enqueue("Yasir")     //Queue { storage: { '2': 'Shah', '3': 'Yasir' }, head: 2, tail: 4 }

  




