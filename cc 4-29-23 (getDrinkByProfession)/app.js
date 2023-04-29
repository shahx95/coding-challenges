/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	            Output
"Jabroni"	        "Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	    "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	    "Your tax dollars"
"Rapper"	        "Cristal"
anything else	    "Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

*/

/*
we will be expecting a string as an input. the string may be having letters different of both upper and lower case. we may get  non string value and will have to deal with such an input  
we will be returning a string according to the rules in the table above
Examples: 
    if user inserts "Jabroni" => we return "Patron Tequila". 
    if user inserts "jAbRonI", we still return "Patron Tequila".
    if user inserts any irrelevant input, we return "Beer" 
Pseudocode:
create a function with an input parameter
create a switch statement and layout the cases according to the table. the default case will be beer.
for each case, if it's true, return the appropiate output that matches the input according to the rules above 
*/

function getDrinkByProfession(param){
    switch(param.toLowerCase()){
        case "jabroni":
          return "Patron Tequila"
        
        case "school counselor":
          return "Anything with Alcohol"
        
        case "programmer":
          return "Hipster Craft Beer"
        
        case "bike gang member":
          return "Moonshine"
        
        case "politician":
          return "Your tax dollars"
        
        case "rapper":
          return "Cristal"
        
        default:
          return "Beer"
    }
  }
