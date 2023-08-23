/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/

/*
E:
    "aaaabb"        => ["a",4]
    "bbbaaabaaaa"   => ["a",4]
    "cbdeuuu900"    => ["u",3]
    ""              => ["",0]
P:
    create a char empty string variable
    create a frequency variable with 0 as initial value
    
    create a for loop to iterate through the input string
        create temp variable to hold frequency and the current char
        give temp frequency variable value of 1 for the first instance
        for each iteration, run a for loop from the character's index to the last index
            check if each successive character is the same
                if same, add 1 to the frequency variable
            if not same, break the internal loop  
            after comign out of the internal loop, compare the temp frequency value with the main frequency variable's value
                if main is less, then reassign the value and also assigned the current character to the main char variable
    after iteration completes, return [main character, main frequency]        

*/
//solution
function longestRepetition(s) {
  
    let char = ""
    let frequency = 0
    
    for(let i=0;i<s.length;i++){
      let current_char = s[i]
      let current_frequency = 1
      for(let j=i+1;j<s.length;j++){
        if(current_char !== s[j]){
          break
        }
        current_frequency++
      }
      if(frequency<current_frequency){
        frequency = current_frequency
        char = current_char
      }
    }
    return [char,frequency];
  }