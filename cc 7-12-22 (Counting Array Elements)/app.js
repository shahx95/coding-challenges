/*

Write a function that takes an array and counts the number of each unique element present.
count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of strings
R: object
E: 
    count(['james', 'james', 'john']) => { 'james': 2, 'john': 1}
P:
    use the reduce method on the input array
    initialize total counter in the reduce method to an empty object
    for every iteration check if the element is present in the object
        if it is then add 1 to its value
        otherwise create the key and set 1 as its value
    return the object    
*/

//solution
function count(array){
  
    return array.reduce( (tally,currentVal) => {
      tally[currentVal]= (tally[currentVal] || 0) + 1
      return tally
    },{})
  }