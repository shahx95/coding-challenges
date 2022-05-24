/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function accepts a string. other types of input will be invalid 
R: function will result a boolean value
E: 
    "Dermatoglyphics" --> true
    "aba" --> false
    "moOse" --> false (ignore letter case) 
P:
    validate the string. return invalid input type if validation fails
    convert input string to lowercase
    create an empty array Letters
    create a variable boolVal that is assigned bool true
    split the string and use a loop to check if letter is in the Letters array. if yes, boolVal is reassigned a value of false
    if no, letter is pushed in the letters array
    
    after loop ends, return boolVal value
*/

//solution
function isIsogram(str){
    //...
    if(typeof(str)==='string'){
      str = str.toLowerCase()
      let letters = []
      
      let boolVal = true
      str.split('').forEach( element => {
        if(letters.includes(element)){
          boolVal = false
        }
        else{
          letters.push(element)
        }
      })
      return boolVal
    }
    else return 'Invalid input'
  }
  