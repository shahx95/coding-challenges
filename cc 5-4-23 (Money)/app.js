/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

/*

function accepts numbers 

 function returns a number
E:
            Let P be the Principal = 1000.00      
            Let I be the Interest Rate = 0.05      
            Let T be the Tax Rate = 0.18      
            Let D be the Desired Sum = 1100.00


            After 1st Year -->
            P = 1041.00
            After 2nd Year -->
            P = 1083.86
            After 3rd Year -->
            P = 1128.30
P:
    validate principal and desired
        return 0 if validation fails
    else 
        create a while loop that runs until accrued amount > desired amount
            everytime the while loop runs increase year count by 1
    
    return the year     
*/

//solution
function calculateYears(principal, interest, tax, desired) {
    // your code
  /*
   Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00
  */
  if(desired <= principal){
    return 0
  }
  else{
    let year = 0
    let accrued = 0
    while(accrued<=desired){ //0<=1100 -- 1041<=1100 --- 1083<=1100 ---- 1128!<=1100
      accrued = principal + principal*interest - principal*interest*tax //1083+.... = 1128
      principal = accrued //principle = 1041 --- 1083 ---1128
      year++ //year = 1 --- year = 2 ---year = 3
    }
    return year
  }
}