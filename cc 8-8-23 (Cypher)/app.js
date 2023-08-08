/*
Digital Cypher assigns to each letter of the alphabet unique number. 
Instead of letters in encrypted word we write the corresponding number.
Then we add to each obtained digit consecutive digits from the key. 

Write a function that accepts str string and key number and returns an array of integers representing encoded str.
The str input string consists of lowercase characters only.
The key input number is a positive integer.
*/

/*
E:
        Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
        Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
P:
    convert input string to an array
    apply map on the array
        for each character return character code using charCodeAt() and subtract 96 to get the alphabetical order
        add the appropiate corresponding digit 
    return array produced by map method    
*/

//solution
function encode(str,  n)
{
  let key = String(n)
  return [...str].map( (character, index) => {
    return character.charCodeAt() - 96 + Number(key[index % key.length])
  })
}