/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

P: parameters R: returning value E: examples P: pseudocode

P: we expect a string as an input. the string can contain characters of either cases. if input is not a string, we need to deal with it.

R: the function should return a string

E: 
    replace("Hi!") === "H!!"
    replace("!Hi! Hi!") === "!H!! H!!"
    replace("aeiou") === "!!!!!"
    replace("ABCDE") === "!BCD!"

P: 
create a function that has a string parameter
create an array of vowels in the function 
convert the string in an array and store it in a variable
loop through the string character array and replace vowels with !
convert the string array back to a string
return the string 
*/ 

function replace(s){
    //coding and coding....
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
    let str = s.split('')
    str.forEach((element,index)=>{
      if(vowel.includes(element)){
        str[index]='!'
      }
    })
    return str.join('')
  }