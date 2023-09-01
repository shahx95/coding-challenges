//challenge
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

//solution
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] <= height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            totalWater += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            totalWater += rightMax - height[right];
            right--;
        }
    }

    return totalWater;
}

// Example usage:
const elevationMap = [0,1,0,2,1,0,1,3,2,1,2,1];
const trappedWater = trap(elevationMap);
console.log("Trapped water:", trappedWater);
