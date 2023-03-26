//How can a Depth First Search be implemented in a Binary Search Tree that visits nodes in ascending order?

//Solution - via in order traversal

function inOrder(){
    const result = [] // Initialize an empty list to store the node values in ascending order

     // Define a traversal function that recursively visits each node in the tree
    const traversal = node => {
        if(node.left){ traversal(node.left) } // If the current node has a left child, recursively traverse the left subtree

        result.push(node.value) // Add the respective subtree's root node value to the result list
        
        if(node.right){traversal(node.right)}
    }

    return result 
}