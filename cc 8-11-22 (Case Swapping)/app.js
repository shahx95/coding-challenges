/*
Given a string, swap the case for each of the letters.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string of alphabets and numbers
R: string of alphabets and numbers
E:
        ""           -->   ""
        "CodeWars"   -->   "cODEwARS"
        "abc"        -->   "ABC"
        "ABC"        -->   "abc"
        "123235"     -->   "123235"
P:
    convert string to an array
    apply map method
        for each character reverse its case
    join the array returned by map
    return the string from the joined array    
*/
//solution
function swap(str){
    return [...str]
                    .map(character => character.toUpperCase()===character?character.toLowerCase():character.toUpperCase())
                    .join("")
  }