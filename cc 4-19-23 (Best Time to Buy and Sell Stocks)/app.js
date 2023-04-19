/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

//Solution
function maxProfit(arr){
    let max = 0
    let left = 0, right = 1
    while(right < arr.length){
        if(arr[left] > arr[right]){
            left = right
            right++
        }
        else{
            max = Math.max(max, arr[right]-arr[left])
            right++
        }
    }
    return max
}

//complexity: 
//since we are only storing constant value for left, right and max, the space complexity will be O(1). 
//we are iterating over the array only once,even though we have 2 pointers, so time complexity will be O(n) 