/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers
R: returns an integer 
E:
        adjacentElementsProduct([1, 2, 3]); ==> return 6
        adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
        adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
P:
    create a maxProduct variable and set it equal to the product of the first two integers
    then loop through the array:
        take the product of the current element and the element at index+1
        compare the product with the  maxProduct 
            if product>maxProduct reassign maxProduct to product
    after the loop ends return the maxProduct    

*/


//solution
function adjacentElementsProduct(array) {
    // max product
    let maxProduct = array[0]*array[1]
    for(let i=1;i<array.length;i++){
      let product = array[i]*array[i+1]
      if(product>maxProduct){
        maxProduct = product
      }
    }
    return maxProduct
  }