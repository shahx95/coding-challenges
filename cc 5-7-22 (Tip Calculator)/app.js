/* 
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: Function will take two inputs. First input will be integer for the total bill amount. Second input  will be a string of rating based on the mentioned table.  Anything other than the ratings in the table need to show a not recognised error. We also need to make sure the bill amount is a positive number.

R: Function returns an integer

E: 
  calculateTip(100, 'excellent') => 20
  calculateTip(200, 'poor') => 10
  calculateTip(100, 'okay') => "Rating not recognized"

P:
  a function thats has an amount and rating parameter
  check if amount is valid
  if valid create a switch statement based on the table

*/
function calculateTip(amount, rating) {
    if(amount>0){
      switch(rating.toLowerCase()){
        case "terrible":
          return Math.ceil(0*amount)
        case "poor":
          return Math.ceil(0.05*amount)
        case "good":
          return Math.ceil(0.10*amount)
        case "great":
          return Math.ceil(0.15*amount)
        case "excellent":
          return Math.ceil(0.20*amount)
        default:
          return "Rating not recognised"}
    }
    else{
      return 'Invalid amount'
    }
  }