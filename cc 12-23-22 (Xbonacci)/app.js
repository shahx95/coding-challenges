/*
 You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
*/


/*
examples
xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence
*/

//quick bruteforce solution - may optimise later
function Xbonacci(signature,n){

    //[0,1],10
    let arr = signature.slice() //[0,1]
    let len = signature.length
    //i=2 i<10 
    //sum = arr.slice(0,2) => arr[0] + arr[1]
    //i=3
    //sum = arr.slice(1,3) => arr[1] + arr[2]
    //i=4
    //sum = arr.slice(2,4) => arr[2] + arr[3] 
    
    for(i=len;i<n;i++){
      let sum = arr.slice(i-len,i).reduce((total,current)=>total+=current,0)
    //   console.log(arr.slice(i-len,i))
      arr.push(sum)
    }
    return arr.slice(0,n)
  }