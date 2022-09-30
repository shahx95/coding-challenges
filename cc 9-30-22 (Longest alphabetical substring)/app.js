/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E: "asdfaaaabbbbcttavvfffffdf" => "aaaabbbbctt"
P:
    create start and end variables 
    create a max variable to hold the longest substring

    traverse through the string using a for loop
        check if the character to the right has a greater asci value 
            reassign end as the current index
        if it does not have a greater asci value
            the substring ends and we check if this substring is greater than max and reassign max the substring is greater
            reassign start value with the current index
    ccheck for max value with the substring after loop ends to take care of the last character
    return the max value        
*/

//solution
function longest(str) {
    let start = 0, end = 0
    let max = str[0]
    
    for(let i=1;i<str.length;i++){
  //     console.log(str[i].charCodeAt(),str[i-1].charCodeAt())
      if(str[i].charCodeAt() >= str[i-1].charCodeAt()){
        end = i
      }
      else{
        if(max.length < (end-start+1)){
          max = str.slice(start,end+1)
        }
        start = i
      }
  //     console.log(str[i].charCodeAt(),str[i-1].charCodeAt(),start,end, max)
    }
    if(max.length < (end-start+1)){
          max = str.slice(start,end+1)
        }
    return max
    
  }