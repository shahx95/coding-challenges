/* 
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).*/


/*
P: parameters R: return value E: examples P: pseudocode

P: all inputs will be positive integers. check for edge cases and return invalid

R: function will return the total distance between the pillars as an integer

E:
  pillars: 1, distance: 10 m and width: 10 cm will return 0 cm
  pillars: 2, distance: 20 m and width: 25 cm will return 2000 cm
  pillars: 11, distance: 15 m and width: 30 cm will return 15270 cm

P:
  create a function that takes all the inputs
  calculate total distance of all pillars minus the exterior ones
  calculate total distance of all the gaps between the pillars
  add the two distances and return them

  use a conditional to check for num of pillars 
  if num of pillars is 1 or 0, set up the function to return 0


*/


function pillars(num_pill, dist, width) {
    
    if(num_pill>1){ //can only calculate distance between at least 2 pillars
    let totalInnerPillarWidth = (num_pill-2)*width //the sum of width of all the pillars except the exterior pillars
    let totalGapWidth = (num_pill-1)*dist*100 //the sum of all the gaps between the pillars
    return totalInnerPillarWidth+totalGapWidth
      }

    return 0 //if number of pillar is 0 or 1, there is no distance to calculate
  }