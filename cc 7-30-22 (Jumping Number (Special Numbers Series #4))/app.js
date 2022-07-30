/*
Jumping number is the number that All adjacent digits in it differ by 1.

Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. >0.
R: string
E:
        jumpingNumber(556847) ==> return "Not!!"
        jumpingNumber(4343456) ==> return "Jumping!!"
        jumpingNumber(89098) ==> return "Not!!"
P:
    convert the number to string and split it to an array
    if array length is 1, return 'Jumping' 
    iterate through array elements from first to the second last
        check if the absolute difference with the element to the right is 1
        if the difference is not 1 return 'Not'
    return 'Jumping'      
*/


//solution
function jumpingNumber(n){
    let arr = Array.from(String(n))
    if(arr.length===1){ return "Jumping!!"}
    for(let i=0;i<arr.length-1;i++){
      if(Math.abs(Number(arr[i]) - Number(arr[i+1]))!=1){
        return "Not!!"
      }
    }
    return "Jumping!!"
  }