/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  array of integers
R:  array of integers
E:
        [5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]
P:  
    collect all odd and even integers in separate arrays
    sort the respective arrays
    use map on the input array and for each odd number, replace with the odd number in the sorted odd array. the same with each even number
    return the map result  
*/


//solution
function sortArray(array) {
    if(array.length<1){return array}
    
    let odd = [], even = []
    array.forEach(element => {
      
      if(element===0){even.push(element)}
      if(element%2){odd.push(element)}
      else even.push(element)
    })
    
    odd.sort((a,b)=>a-b).reverse()
    even.sort((a,b)=>b-a).reverse()
    
    return array.map(element => {
      if(element%2){return odd.pop()}
      else return even.pop()
    })
  }