/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

/*
Example:
reverse([1,2,3,4,5,6,7,8,9]) => [9, 8, 7, 6, 5, 4, 3, 2, 1]
Pseudocode:
    create a temp array
    pop from the input array and push in the temp array
    return the temp array once input array is empty
*/

//solution
 
function reverse(array) {
    let temp = []
    while(array.length){
        temp.push(array.pop())
    }

    return temp
  }