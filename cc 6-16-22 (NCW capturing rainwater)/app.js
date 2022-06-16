/*
Capturing Rainwater

Create a capturingRainwater() function that takes in an array of heights, and returns the amount of rainwater that could be contained in that array.

For example, the array [4, 2, 1, 3, 0, 1, 2], there are 6 units of water that can be contained, so capturingRainwater([4, 2, 1, 3, 0, 1, 2]) will return 6.
*/

//solution
function capturingRainwater(heights) {
    // Write your code here
    //create an array left 
    let left = []
    let temp = heights[0]
    for(let i=0;i<heights.length;i++){
      if(heights[i]>=temp){
        left.push(heights[i])
        temp = heights[i]
      }
      else{
        left.push(temp)
      }
    }
    //create an array right
    let right = []
    temp = heights[heights.length-1]
    for(let i=heights.length-1;i>=0;i--){
      if(heights[i]>=temp){
        right.push(heights[i])
        temp = heights[i]
      }
      else{
        right.push(temp)
      }
    }
  
    //Math.min(left[i],right[i])-a[i]
    let sum = 0
    for(let i=0;i<heights.length;i++){
      sum += Math.min(left[i],right[i])-heights[i]
    }
    return sum
  }
  
  const testArray = [4, 2, 1, 3, 0, 1, 2];
  console.log(capturingRainwater(testArray));
   