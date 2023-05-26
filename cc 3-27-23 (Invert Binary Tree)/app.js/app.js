//Invert Binary Tree challenge using JavaScript

//solution
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function invertTree(root) {
    if (root === null) {
      return null;
    }
    
    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
  }
  
  // Example 
  const tree = new TreeNode(4);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(7);
  tree.left.left = new TreeNode(1);
  tree.left.right = new TreeNode(3);
  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(9);
  
  console.log("Original Tree:");
  console.log(tree);
  
  console.log("Inverted Tree:");
  console.log(invertTree(tree));
  