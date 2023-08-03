/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.
*/

/*
E:
    unluckyDays(2015) == 3
    unluckyDays(1986) == 1
P:
    create a variable to hold count
    create a date object for the year and the date of 13. let the month be arbitary. the month will be changed in every iteration
    create an iterator from 0 to 11 since the months start from 0 in javascript
    use getDay method to check the day of 13th for each month
    if the day is 5 (i.e. friday) increase count by 1
    return count after iteration is over

*/

//solution
function unluckyDays(year){
    let count = 0
    let date = new Date(year,0,13)
    for(let month=0;month<12;month++){
        date.setMonth(month)
        if(date.getDay()===5){
            count++
        }
    }
    return count
  }