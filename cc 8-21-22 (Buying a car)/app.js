/*
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: positive int or float, guaranteed
R: array - [month, moneyLeft] - int 
E:
    nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] 
    nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
    nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
P:

    check if old car's price is >= new car's price and return [0, old car price - new car price]
    otherwise, start a while loop that runs until the sum of old car's value and saving is >= new car's value
        for each iteration, increase month by 1
        if month is even (2,4,6,etc.), put an increase of 0.5 percent in percent loss
        update the price of new and old car with this percent loss in value
        calculate the sum startPriceOld + savingperMonth - startPriceNew
    after while loop ends, return the month tally and the sum in an array    
*/

//solution

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let sum = startPriceOld - startPriceNew  
    let month = 0
    let savings = savingperMonth
    percentLossByMonth = (percentLossByMonth/100)
    
    while( sum < 0 ){
      month++
      if(month%2 === 0){
        percentLossByMonth+= 0.5/100
        }
      
     startPriceNew = startPriceNew - startPriceNew * percentLossByMonth
     startPriceOld = startPriceOld - startPriceOld * percentLossByMonth
     savingperMonth = savings * month
     sum = Math.round(((startPriceOld + savingperMonth)) - startPriceNew)
  //     console.log(startPriceNew, startPriceOld, percentLossByMonth, savingperMonth, month)
     
    
      }
    return [month,sum]
    
  }