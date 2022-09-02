/*
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
    "example(unwanted thing)example" => "exampleexample"
P:
    create a counter initialised to 0 that adds 1 for bracket opening and subtracts one for bracket closing
    iterate over the string and only keep the characters when the counter remains 0
    return the characters in a string
*/

//solution
function removeParentheses(s){
    let output = ""
    let counter = 0
    for(let character of s){
      if(character === "("){
        counter+=1
      }
      else if(character === ")"){
        counter -=1
      }
      else{
        if(counter===0){
          output+=character
        }
      }
    }
    
    return output
  }