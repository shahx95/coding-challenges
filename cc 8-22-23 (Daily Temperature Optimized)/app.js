//challenge
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

//examples
console.log(dailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0])
console.log(dailyTemperature([30, 40, 50, 60]), [1, 1, 1, 0])
console.log(dailyTemperature([30, 60, 90]), [1, 1, 0])

//optimized solution
function dailyTemperature(temperatures) {
    const n = temperatures.length
    const result = new Array(n).fill(0)
    const stack = []

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop()
            result[j] = i - j
        }
        stack.push(i)
    }

    return result
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
const result = dailyTemperature(temperatures)
console.log(result)  // Output: [1, 1, 4, 2, 1, 1, 0, 0]
