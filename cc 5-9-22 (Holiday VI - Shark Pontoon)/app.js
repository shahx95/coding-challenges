/*
Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function parameters are defined for us in the question. 
R: return a string value 
E: 
    shark(12, 50, 4, 8, true) => "Alive!"
    shark(24, 0, 4, 8, true) => "Shark Bait!"

P: 
    we need to make use of the formula time = distance / speed
    first we need to find respective time based on the distance and speed of shark and human
    for the shark, we half the speed in our calculation if dolphin is true
    once we have the shark time and human time, we compare both values
    if shark time is more than human time, it means shark is slow. vice versa
    function will return the appropiate string values after time comparison

*/


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime = sharkDistance/(dolphin?sharkSpeed/2:sharkSpeed)  // ternary operator used to half sharkSpeed if dolphin is true 
    let youTime = pontoonDistance/youSpeed
    return sharkTime>youTime?'Alive!':'Shark Bait!'
    
  }