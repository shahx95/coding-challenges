
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

Empty arrays are equal to 0 in this problem. At index 0 the left side is {} an empty array which is 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes an array as an input. no other input type will be provided as mentioned in the challenge.
R: return an integer value representing the index
E: 
    [1,2,3,4,3,2,1] => 3
    [1,100,50,-51,1,1] => 1
    [20,10,-80,10,10,15,35] => 0
P: 
    [1,2,3,X,8,7,6]
    create a loop that takes each element of the array
    in that loop, create sub arrays for the left of that element and the right of the element
    add each sub arrays and compare 
    if the sub array addition values are equal return the index of the element

    set initial index counter to -1 to act as our default case 

*/


//solution
function findEvenIndex(arr)
{
  //If there is no index that would make this happen, return -1.
  let equivalentPoint = -1 //keeping it at -1 initially so that if index search fails it returns -1
  
  arr.forEach( (value,index)=>{
    //[1,2,3,4,X,9,8,7,6]
    let leftSide = arr.slice(0,index).reduce( (total,current)=> total+current,0 ) //reduce with an initial 0 will take care of empty array condition
    let rightSide = arr.slice(index+1).reduce( (total,current)=> total+current,0 )
    if(leftSide === rightSide){
      equivalentPoint = index
    }
  } )
  
  return equivalentPoint
}