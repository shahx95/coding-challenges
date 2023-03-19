//Implement an insert function in a Binary Search Tree

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value){
        this.root = new Node(value)
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        let newNode = new Node(value)

        //create a recursive search function to reach appropiate position for insertion
        const searchTree = node => {
            //if value is less the node value, go left
                if(value < node.value){
                    //if node does not have a left child
                    if(!node.left){
                        node.left = newNode
                    }
                    //else repeat in the left sub tree
                    else{
                        searchTree(node.left)
                    } 
                }
            
            //else if value is more than node value, go right
                else if(value > node.value){
                    if(!node.right){
                        node.right = newNode
                    }
                    else{
                        searchTree(node.right)
                    }
                }
        }

        searchTree(this.root) //call function at root

        //increment count after insertion
        this.count++
    }
}