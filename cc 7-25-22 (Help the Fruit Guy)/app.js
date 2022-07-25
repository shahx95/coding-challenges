/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of strings
R: array of strings
E:
        ["apple","banana","kiwi","melon","orange"]) => ["apple","banana","kiwi","melon","orange"]
        ["rottenApple","rottenBanana","rottenApple","rottenPineapple","rottenKiwi"]) => ["apple","banana","apple","pineapple","kiwi"]
        [] => []
P:
    if the array is not empty or NULL
        use map to iterate through each element and check if the element contains "rotten"
            if it does, remove "rotten" and return the element
            otherwise just return the element as is
        return the array formed after map method    
    else return []        
*/

//solution
function removeRotten(bagOfFruits){
    if(bagOfFruits){
      return bagOfFruits.map( fruit => {
      if(fruit.includes("rotten")){
        return fruit.slice(6).toLowerCase()
      }
      return fruit
    } )
    }
    else return []
    
  }