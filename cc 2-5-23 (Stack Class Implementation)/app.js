//Implement javascript stack using class and demonstrate it's working

//solution
class Stack{
    constructor(){
      this.storage = {}
      this.size = 0
    }
  
    push(element){
      this.size++
      this.storage[this.size] = element
      return this.storage
    }
  
    pop(){
      const returnVal = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return returnVal
    }
  
    peek(){
      return this.storage[this.size]
    }
  } 
  
  //demonstration
  const fruitStack = new Stack
  console.log(fruitStack.push("Orange"))
  console.log(fruitStack.push("Grapes"))
  console.log(fruitStack.push("Apple"))
  console.log(fruitStack.pop())
  console.log(fruitStack.pop())
  console.log(fruitStack.push("Apple"))
  console.log(fruitStack.peek())