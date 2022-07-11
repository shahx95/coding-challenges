/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Given a number determine if it Automorphic or not .
The number passed to the function is positive

*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  integer. >=0.
R:  string
E:
    autoMorphic (25) -->> return "Automorphic" 
    autoMorphic (13) -->> return "Not!!"
    autoMorphic (76) -->> return "Automorphic"
    autoMorphic (225) -->> return "Not!!"         
P:
    square the input number and convert the squared value to a string
    covert the input number into a string
    check if the coverted string ends with the converted input number string
      if it does, return automorphic
      else return not
         
*/

//solution

function automorphic(n){
    if( String(n**2).endsWith(String(n)) ){
      return "Automorphic"
    }
    else{
      return "Not!!"
    }
  }
   