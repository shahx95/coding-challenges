//Create a function called "Contains" that checks if a given value is present in a Binary Search Tree and returns true if it is, or false if it is not.

//Solution
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }

    contains(value){
        let currentNode = this.root // Start from the root node of the binary search tree
        while(currentNode){
            if(value === currentNode.value){ // If the value is found at the current node, return true
                return true
            }
            else if(value < currentNode.value){
                currentNode = currentNode.left // If the value is less than the value of the current node, move to the left child node
            }
            else if(value > currentNode.value){
                currentNode = currentNode.right // If the value is greater than the value of the current node, move to the right child node
            }
        }

        return false // If value is not found, return false
    }
}