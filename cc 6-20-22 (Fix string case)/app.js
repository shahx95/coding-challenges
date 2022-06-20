/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a string 
R: function return a string
E:
        solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
        solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
        solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
P:
    create two counter variables for uppercase and lowercase
    create an array of string characters
    run a loop through the string characters array
        if string character is uppercase increase uppercase counter by 1
        else incrase lowercase counter by 1
    check which counter is larger and apply the respective case method on the whole string
    return the string    
*/


//solution
function solve(s){
    //..
  let uppercase = 0
  let lowercase = 0
  s.split("").forEach( element => element===element.toUpperCase()?uppercase++:lowercase++)
  return uppercase>lowercase?s.toUpperCase():s.toLowerCase()
}