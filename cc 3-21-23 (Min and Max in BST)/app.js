//Implement the min and max functions in a Binary Search Tree

//solution
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class LinkedList{
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    min(){
        let currentNode = this.root
        //min is the left most child in the BST
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.value
    }

    max(){
        let currentNode = this.root
        //max is the right most child in the BST
        while(currentNode.right){
            currentNode = currentNode.right
        }

        return currentNode.value
    }
}