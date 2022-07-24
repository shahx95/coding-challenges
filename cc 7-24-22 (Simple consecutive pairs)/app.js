/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: array of integers. 
R: an integer
E:
        [1,2,5,8,-4,-3,7,6,5]) => 3
        [21, 20, 22, 40, 39, -56, 30, -55, 95, 94]) => 2
        [81, 44, 80, 26, 12, 27, -34, 37, -35]) => 0
P:
    iterate through the input array and increment iterator by 2
        for each array element, check if the absolute value of difference between current element and the next element is 1
            if it is 1, then increase count by 1
    return count        
*/

//solution
function pairs(ar){
    let count = 0 
    for(let i=0;i<ar.length;i+=2){
      if(Math.abs(ar[i] - ar[i+1])===1){
        count++
      }
    }
     return count
   };