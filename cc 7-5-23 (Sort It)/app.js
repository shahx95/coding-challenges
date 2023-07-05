/*
Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
*/


/*
Examples:
        "abcdef"                      -- => "abcdef"
        "pqksuvy"                     -- => "kpqsuvy"
        "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
Pseudocode:
    split the input string into an array
    sort the array
    join the array into a string and return the string
*/


//solution
function sortGiftCode(code){
    return code.split("").sort().join("")
  }