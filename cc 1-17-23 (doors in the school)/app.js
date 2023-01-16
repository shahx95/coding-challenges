/*
In the morning all the doors in the school are closed. The school is quite big: there are N doors. Then pupils start coming. It might be hard to believe, but all of them want to study! Also, there are exactly N children studying in this school, and they come one by one.

When these strange children pass by some doors they change their status (i.e. Open -> Closed, Closed -> Open). Each student has their number, and each i-th student alters the status of every i-th door. For example: when the first child comes to the schools, he changes every first door (he opens all of them). The second one changes the status of every second door (he closes some doors: the 2nd, the 4th and so on). Finally, when the last one – the n-th – comes to the school, he changes the status of each n-th door (there's only one such door, though).

You need to count how many doors are left opened after all the students have come.
*/


//examples
    console.log(doors(5), 2);
    console.log(doors(10), 3);
    console.log(doors(100), 10);

//solution - bruteforce

function doors(n){
    // create array of length n with false as starting value
    let arr = Array(n).fill(false,0)
    // if door % student number === 0, then flip the door value
    for(let i=1;i<=n;i++){
      for(let door=0;door<arr.length;door++){
        if((door+1)%i===0){
          arr[door]=!arr[door]
        }
      }
    }
    // return length of true values in array
     return arr.filter(status => status===true).length
  }

//solution - improved solution
function doors2(n){
  //doors that are left open are only divisible by one number - the square root of the door number.
  //look for perfect squares
  let count = 0
  // if sqrt number % 1 === 0, then we have perfect square
  for(let i=1;i<=n;i++){
    if(Math.sqrt(i)%1===0){count++}
  }
  // return count
   return count
}  