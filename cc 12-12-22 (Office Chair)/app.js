/*
So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".
*/



//function will get array of arrays and an integer

//function will return array for result or a string for edge cases 

//Example:
  //      [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

    //    result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.


//check for edge cases
//create an empty result arr  
//iterate through the rooms
    //  for each room, check available seats
    //     if seats are available, push to the result arr and adjust needed seats
        //   if seats are not available, push 0 to the arr
//return result arr         


//solution

function meeting(x, need){
    let seats = need
    let arr = []
    
    if(seats===0){return "Game On"}
     
    for(let room of x){
      let availablity = room[1] - room[0].length
      
      if(availablity > 0){
        if((seats - availablity) < 0){
        arr.push(seats)
        seats = 0
        break
      }
      else if((seats - availablity) === 0){
        arr.push(availablity)
        seats = 0
        break
      }
      else if((seats - availablity) > 0){
        arr.push(availablity)
        seats = seats - availablity
      }
      else arr.push(0) 
      }
      
      else arr.push(0) 
    
    }
    
    if(seats > 0){
      return "Not enough!"
    }
    
    return arr
  }
