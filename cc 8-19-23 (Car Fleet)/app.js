//challenge
// There are n cars going to the same destination along a one-lane road. The destination is target miles away.
// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).
// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
// Return the number of car fleets that will arrive at the destination.

//examples
// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3] => Output: 3
// Input: target = 10, position = [3], speed = [3] Output: 1
// Input: target = 100, position = [0,2,4], speed = [4,2,1] Output: 1

//solution
function carFleet(target, position, speed){
    let carDetail = []
    for(let i=0;i<position.length;i++){ //O(N)
        carDetail.push([position[i], speed[i]])
    }
    carDetail.sort((a,b)=>b[0]-a[0]) //O(NlogN)

    let carFleet = []
    for(let car of carDetail){ //O(N)
        let time = (target-car[0])/car[1]
        if(carFleet.length = 0){
            carFleet.push(time)
        } else if (time > carFleet[carFleet.length-1]){
            carFleet.push(time)
        }

    }
    return carFleet.length

}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
console.log(carFleet(10, [3], [3]), 1);
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);

//The time complexity of the function will be O(N log N), and the space complexity will be O(N).