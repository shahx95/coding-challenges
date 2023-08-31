/*
Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.
*/


/*
E:
    bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) => 'Loser!'
    bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) => 'Winner!'

P:
    iterate through the ticket array using filter method
    for each sub array, check if any character of the first array element has a character code which equals the second array element
        if it equals, filter the sub array
        check the length of the returned filtered array. if length > wins, return winner else return loser 
*/

//solution


// using array methods
function bingo(ticket, win){
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
    {
      return "Winner!";
    }
    return "Loser!";
  }

// without array methods  
function bingo(ticket, win){
    let miniWins = 0
    for(let arr of ticket){
      for(let character of arr[0]){
        if(character.charCodeAt(0)==arr[1]){
          miniWins++
          break
        }
        
      }
    }
    if(miniWins>=win){return "Winner!"}
    else return "Loser!"
  }