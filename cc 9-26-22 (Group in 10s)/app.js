/*
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integers
R: array 
E:
        const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

        grouped[0]     // [3, 8]
        grouped[1]     // [12, 17, 19]
        grouped[2]     // [25]
        grouped[3]     // [35, 38]
        grouped[4]     // undefined
        grouped[5]     // [50]
P:
    create an array from the input integers arguments
    sort the array
    filter the elements by 10s
    remove any empty array elements and return
*/

//solution
function groupIn10s() {
    let arr = Array.from(arguments) 
    
    arr.sort()
    
    let result = []
    
    
    for(let i=0;i<=Math.max(...arr);i+=10){
      let next = i + 10
      result.push(arr.filter(element => element>=i && element<next))
    }
    
    return result.map(element => {
      if(element.length>=1){return element}
      else return  
    })
  }