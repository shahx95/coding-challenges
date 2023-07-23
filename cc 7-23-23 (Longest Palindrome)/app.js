/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.
*/

/*
E:
    "a" -> 1 
    "aab" -> 2  
    "abcde" -> 1
    "zzbaabcd" -> 4
    "" -> 0
P:
    check for length < 1, return 0
    if length === 1, return 1
    create a variable to hold longest value and assign it value of 1 
    otherwise
        create a for loop and iterate over the string from i =0
            for each iteration, create another iteration that produces slice of string from i+1, string.length - 1
            check if each string produced is palindrome by comparing it with the reversed string
                if it is a palindrome, compare its value with the holding variable
                    if value is larger, replace the value held by holding variable with the longer value
    after all the iterations are complete, return the holding variable's value                  
*/
//solution

longestPalindrome=function(s){
  
    let longest = 1
    if(s.length<1){return 0}
    if(s.length===1){return 1}
    for(let i=0;i<s.length;i++){
      for(let j=i+1;j<s.length;j++){
        if( s.slice(i,j+1) === s.slice(i,j+1).split("").reverse().join("") ){
          if (longest < s.slice(i,j+1).length){
            longest = s.slice(i,j+1).length
          }
        }
      }
    }
  
    return longest
  }
