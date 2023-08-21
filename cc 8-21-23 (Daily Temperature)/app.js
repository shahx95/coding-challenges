//challenge
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

//examples
console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log(dailyTemperature([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperature([30, 60, 90]), [1, 1, 0]);

//bruteforce solution
function dailyTemperature(input){
    let output = Array(input.length).fill(0)
    for(let i=0;i<input.length;i++){
        for(let j=i;j<input.length;j++){ //nested loop so O(N^2) time complexity
            if(input[j] > input[i]){
                output[i] = j-i
                break
            }
        }
    }
    return output
}