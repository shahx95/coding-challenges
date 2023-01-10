/*
Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.
*/


//example

/*
Input: arr[] = {100, 180, 260, 310, 40, 535, 695}
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
                       Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
                       Maximum Profit  = 210 + 655 = 865


Input: arr[] = {4, 2, 2, 2, 4}
Output: 2
Explanation: Buy the stock on day 1 and sell it on day 4 => 4 – 2 = 2
                       Maximum Profit  = 2
*/


const maxPrice = arr => {
    let max = 0
    let temp = []
    for(let i=0;i<arr.length-1;i++){
        if(max < arr[i+1] - arr[i]){
            temp = [] 
        }
    }
}


