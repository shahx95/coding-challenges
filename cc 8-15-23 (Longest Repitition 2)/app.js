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
*/

//solution
function longestRepition(str){
  if(str.length === 0){return ["", 0]}

  let longest = [str[0], 1]
  let currentLongest = 1
  for(let i=0;i<str.length;i++){
    let currentCharacter = str[i]
    if(currentCharacter === str[i+1]){
      currentLongest++
    } else{
      currentLongest = 1
    }

    if(longest[1] < currentLongest){
      longest = [currentCharacter, currentLongest]
    }

  }

  return longest
}