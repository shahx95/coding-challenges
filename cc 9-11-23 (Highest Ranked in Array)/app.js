/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. no empty array. no NaN.  
R: integer
E:
        [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
        [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
        [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

P: use the reduce function to return an object with key/value pair reflective of the integer and its frequency
   use for...in loop to iterate through the object and compare the values
        store the maximum value and its corresponding key in variables
        compare them with the key and value pair in each iteration
        update if the frequency is >= to the existing value
    return the key with the highest frequency     
*/
//solution

function highestRank(arr){
    let table = arr.reduce((total,current) => {
      total[current] = (total[current] || 0) + 1
      return total
    },{})
    
    let highestFreq = 0
    let val = 0
    for(let key in table){
      if(highestFreq <= table[key]){
        highestFreq = table[key]
        val = key
      }
    }
    
    return +val
  }