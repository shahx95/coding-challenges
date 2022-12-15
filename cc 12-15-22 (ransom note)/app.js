// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//do we need to take care of punctuation? does case matter?


//create hashmap of every word and use it to check if ransom note can be created 
//problem will be solved in a linear time complexity

//examples
console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)

function ransomNote(note, magazine){
    const noteWords = note.toLowerCase().split(" ")
  const magazineWords = magazine.toLowerCase().split(" ")
  const magazineHash = {}
  

  for(let word of magazineWords){
    magazineHash[word] = (magazineHash[word] || 0) + 1  
    }

  for(let word of noteWords){
    if(magazineHash[word]){
      magazineHash[word]= magazineHash[word] - 1

    }else{
      return false
    }
  }
  return true
}
