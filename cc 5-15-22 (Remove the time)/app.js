/*
You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2"
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a specifically formatted string input i.e. "Weekday Month Day, time"
R: return an sting value 
E: 
    ("Friday May 2, 9am") => "Friday May 2"
    ("Tuesday January 29, 10pm") => "Tuesday January 29"
    ("Monday December 25, 10pm") => "Monday December 25"
P: 
    create a function with a single parameter for the date string
    make use of the strict input format i.e. "Weekday Month Day, time". we want everything before the comma
    split the input by "," 
    return the first value in the splitted array 
*/

function shortenToDate(longDate) {
    
    return longDate.split(',')[0] //splits by comma and puts the values in an array. returns the first value before the comma 
  }