//Challenge:
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

//Examples
console.log(longestSequence([100,4,200,1,3,2]), 4) //The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
console.log(longestSequence([0,3,7,2,5,8,4,6,0,1]), 9)

//Solution
function longestSequence(arr) {
    let hashmap = {}
    arr.forEach(element => hashmap[element] = true)

    let longestLength = 1
    let length = 1

    for (let i = 0; i < arr.length; i++) {
        if (!hashmap[arr[i] - 1]) { // starting of sequence
            let j = 1
            while (hashmap[arr[i] + j]) {
                length++
                if (length > longestLength) {
                    longestLength = length
                }
                j++
            }
        }

        length = 1
    }

    return longestLength
}
