/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  function takes in a string. other input types are not expected 
R:  function returns a string
E:
        Kata.getMiddle("test") should return "es"

        Kata.getMiddle("testing") should return "t"

        Kata.getMiddle("middle") should return "dd"

        Kata.getMiddle("A") should return "A"
P:
        get string length and divide it by 2 to get the middle value
        for even number, get a slice of the string including the middle value and a preceding value
        for odd, get the remainder and use Math.floor to get the middle value
        check if string is odd or even and return the calculation for even or odd respectively 
        
*/

//solution
function getMiddle(s)
{
  //Code goes here!
  //test => es
  // testing => t
  let middle = s.length/2
  let even = s.slice((middle)-1,(middle)+1) //slice of the middle 2 characters
  let odd = s[Math.floor(middle)] 
  return s.length%2===0?even:odd
}